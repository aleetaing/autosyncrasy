import './index.css';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import AutomobileForm from './AutomobileForm';

export default function AutomobileList() {

    const [automobiles, setAutomobiles] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [vinToDelete, setVinToDelete] = useState(null);
    // const [hasCreated, setHasCreated] = useState(false);

    const openDeleteConfirmation = (vin) => {
        setVinToDelete(vin);
        setShowDeleteConfirmation(true);
    };

    const closeDeleteConfirmation = () => {
        setShowDeleteConfirmation(false);
    };

    const confirmDelete = async () => {
        if (vinToDelete) {
            await deleteAuto(vinToDelete);
            closeDeleteConfirmation();
            notifications.show({
                title: 'Deleted',
                message: 'Automobile was deleted',
                color: 'red',
                autoClose: 1500,
            })
        }
    };

    const fetchData = async () => {
        const url = "http://localhost:8100/api/automobiles/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteAuto = async (vin) => {

        const url = `http://localhost:8100/api/automobiles/${vin}`;
        const fetchConfig = {
            method: "delete"
        }

        const response = await fetch(url, fetchConfig);

        if (response.ok) {
            fetchData();
        };

    }

    const handleFormSubmit = () => {
        close();
        fetchData();
        notifications.show({
            title: 'Success',
            message: 'Automobile was successfully added!',
            color: 'green',
            autoClose: 1500,
        })

    }

    // const formClasses = (!hasCreated) ? '' : 'd-none';
    // const successMessage = (!hasCreated) ? 'd-none' : 'alert alert-success mb-0';

    return (
        <>
            <Modal opened={opened} onClose={close} size="auto" centered>
                <div>
                    <AutomobileForm onSubmit={handleFormSubmit}/>
                </div>
                {/* <div className={successMessage} id="success-message">
                    Automobile successfully added!
                </div> */}
            </Modal>

            <Group>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1 className="mb-3 mt-3">Automobiles</h1>
                    <Button onClick={open}>Create</Button>
                </div>
            </Group>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {automobiles.map(automobile => {
                        const sold = automobile.sold ? "Yes" : "No";
                        return (
                            <tr key={automobile.id}>
                                <td>{automobile.vin}</td>
                                <td>{automobile.color}</td>
                                <td>{automobile.year}</td>
                                <td>{automobile.model.name}</td>
                                <td>{automobile.model.manufacturer.name}</td>
                                <td>{sold}</td>
                                <td><button className="btn btn-danger" onClick={() => openDeleteConfirmation(automobile.vin)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <Modal opened={showDeleteConfirmation} onClose={closeDeleteConfirmation} size="sm" centered>
                <div>
                    <p>Are you sure you want to delete this automobile?</p>
                    <Button onClick={closeDeleteConfirmation}>
                        No, don't delete it
                    </Button>
                    <Button color="red" onClick={confirmDelete}>
                        Delete automobile
                    </Button>
                </div>
            </Modal>

        </>
    )

}

import './index.css';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import AutomobileForm from './AutomobileForm';

export default function AutomobileList() {

    const [automobiles, setAutomobiles] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [hasCreated, setHasCreated] = useState(false);

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
    }, [automobiles]);

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
        setHasCreated(true);
        setTimeout(() => {
            close();
        }, 1200);
        setHasCreated(false);
    }

    const formClasses = (!hasCreated) ? '' : 'd-none';
    const successMessage = (!hasCreated) ? 'd-none' : 'alert alert-success mb-0';

    return (
        <>
            <Modal opened={opened} onClose={close} size="md" centered>
                <div className={formClasses}>
                    <AutomobileForm onSubmit={handleFormSubmit}/>
                </div>
                <div className={successMessage} id="success-message">
                    Automobile successfully added!
                </div>
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
                                <td><button className="btn btn-danger" onClick={() => deleteAuto(automobile.vin)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </>
    )

}

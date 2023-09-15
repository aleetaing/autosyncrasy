import './index.css';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import ManufacturerForm from './ManufacturerForm';

export default function ManufacturerList() {

    const [manufacturers, setManufacturers] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [hasCreated, setHasCreated] = useState(false);

    const fetchData = async () => {
        const url = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    };

    useEffect(() => {
        fetchData();
    }, [manufacturers]);

    const handleFormSubmit = () => {
        setHasCreated(true);
        setTimeout(() => {
            close();
        }, 1200);
    }

    const formClasses = (!hasCreated) ? '' : 'd-none';
    const successMessage = (!hasCreated) ? 'd-none' : 'alert alert-success mb-0';

    return (
        <>
            <Modal opened={opened} onClose={close} size="md" centered>
                <div className={formClasses}>
                    <ManufacturerForm onSubmit={handleFormSubmit}/>
                </div>
                <div className={successMessage} id="success-message">
                    Manufacturer successfully added!
                </div>
            </Modal>

            <Group>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1 className="mb-3 mt-3">Manufacturers</h1>
                    <Button onClick={open}>Create</Button>
                </div>
            </Group>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers.map(manufacturer => {
                        return (
                            <tr key={manufacturer.id}>
                                <td>{manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )

}

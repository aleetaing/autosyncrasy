import './index.css';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import ManufacturerForm from './ManufacturerForm';

export default function ManufacturerList() {

    const [manufacturers, setManufacturers] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);

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
        close();
    }

    return (
        <>
            <Modal opened={opened} onClose={close} size="md" centered>
                <ManufacturerForm onSubmit={handleFormSubmit}/>
            </Modal>
            <h1 className="mb-3 mt-3">Manufacturers</h1>
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
            <Group position="center">
                <Button onClick={open}>Create</Button>
            </Group>
        </>
    )

}

import './index.css';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import ModelForm from './ModelForm';

export default function ModelList() {

    const [models, setModels] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);

    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
        }
    };

    useEffect(() => {
        fetchData();
    }, [models]);

    const handleFormSubmit = () => {
        close();
    }


    return (
        <>
            <Modal opened={opened} onClose={close} size="md" centered>
                <ModelForm onSubmit={handleFormSubmit}/>
            </Modal>
            <h1 className="mb-3 mt-3">Models</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map(model => {
                        return (
                            <tr key={model.id}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td><img width={200} src={model.picture_url} alt=""/></td>
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

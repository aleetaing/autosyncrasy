import './index.css';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import ModelForm from './ModelForm';

export default function ModelList() {

    const [models, setModels] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [hasCreated, setHasCreated] = useState(false);

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
        setHasCreated(true);
        setTimeout(() => {
            close();
            setHasCreated(false);
        }, 1200);
    }

    const formClasses = (!hasCreated) ? '' : 'd-none';
    const successMessage = (!hasCreated) ? 'd-none' : 'alert alert-success mb-0';

    return (
        <>
            <Modal opened={opened} onClose={close} size="md" centered>
                <div className={formClasses}>
                    <ModelForm onSubmit={handleFormSubmit}/>
                </div>
                <div className={successMessage} id="success-message">
                    Model successfully added!
                </div>
            </Modal>

            <Group>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1 className="mb-3 mt-3">Models</h1>
                    <Button onClick={open}>Create</Button>
                </div>
            </Group>

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
        </>
    )

}

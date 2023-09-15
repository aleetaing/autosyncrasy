import './index.css';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import TechnicianForm from './TechnicianForm';

export default function TechnicianList() {

    const [technicians, setTechnicians] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [hasCreated, setHasCreated] = useState(false);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/technicians/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    };

    useEffect(() => {
        fetchData();
    }, [technicians]);

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
                    <TechnicianForm onSubmit={handleFormSubmit}/>
                </div>
                <div className={successMessage} id="success-message">
                    Technician successfully added!
                </div>
            </Modal>

            <Group>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1 className="mb-3 mt-3">Technicians</h1>
                    <Button onClick={open}>Create</Button>
                </div>
            </Group>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {technicians.map(technician => {
                        return (
                            <tr key={technician.id}>
                                <td>{technician.employee_id}</td>
                                <td>{technician.first_name}</td>
                                <td>{technician.last_name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )

}

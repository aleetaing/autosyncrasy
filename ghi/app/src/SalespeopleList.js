import React, { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import SalesPersonForm from './SalespersonForm';

function SalespersonList() {
    const [salesperson, setSalesperson] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [hasCreated, setHasCreated] = useState(false);

    const fetchData = async () => {
        const url = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalesperson(data.salesperson);
        }
    }

    useEffect(() => {
        fetchData();
    }, [salesperson]);

    const handleFormSubmit = () => {
        setHasCreated(true);
        setTimeout(() => {
            close();
        }, 1200);
    }

    const formClasses = (!hasCreated) ? '' : 'd-none';
    const successMessage = (!hasCreated) ? 'd-none' : 'alert alert-success mb-0';

    return (
        <div>

            <Modal opened={opened} onClose={close} size="md" centered>
                <div className={formClasses}>
                    <SalesPersonForm onSubmit={handleFormSubmit}/>
                </div>
                <div className={successMessage} id="success-message">
                    Salesperson was successfully added!
                </div>
            </Modal>

            <Group position="center">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1 className="mb-3 mt-3">Salespeople</h1>
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
                    {salesperson.map(salesperson => (
                        <tr key={salesperson.id}>
                            <td>{salesperson.employee_id}</td>
                            <td>{salesperson.first_name}</td>
                            <td>{salesperson.last_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default SalespersonList;

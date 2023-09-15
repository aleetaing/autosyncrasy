import React, { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import CustomerForm from './CustomerForm';

function Customerslist() {
    const [customer, setCustomer] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);

    const fetchData = async () => {
        const url = 'http://localhost:8090/api/customers/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setCustomer(data.customer);
        }
    }

    useEffect(() => {
        fetchData();
    }, [customer]);

    const handleFormSubmit = () => {
        close();
    }

    return (
        <div>
            <Modal opened={opened} onClose={close} size="md" centered>
                <CustomerForm onSubmit={handleFormSubmit}/>
            </Modal>

            <Group>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <h1 className="mb-3 mt-3">Customers</h1>
                <Button onClick={open}>Create</Button>
                </div>
            </Group>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {customer.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.first_name}</td>
                            <td>{customer.last_name}</td>
                            <td>{customer.phone_number}</td>
                            <td>{customer.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Customerslist;

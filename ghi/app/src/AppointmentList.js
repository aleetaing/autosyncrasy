import './index.css';
import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import AppointmentForm from './AppointmentForm';

export default function AppointmentList() {

    const [appointments, setAppointments] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [hasCreated, setHasCreated] = useState(false);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const createdAppointments = data.appointments.filter(appointment => appointment.status === "created");
            setAppointments(createdAppointments);
        }
    };

    useEffect(() => {
        fetchData();
    }, [appointments]);

    const cancelAppointment = async (id) => {
        const cancelUrl = `http://localhost:8080/api/appointments/${id}/cancel/`;
        const fetchConfig = {
            method: "put",
            body: JSON.stringify({ status: "canceled" }),
            headers: {
                "Content-Type": "application/json"
            },
        };
        const response = await fetch(cancelUrl, fetchConfig);
        if (response.ok) {
            fetchData();
        };

    }

    const finishAppointment = async (id) => {
        const finishUrl = `http://localhost:8080/api/appointments/${id}/finish/`;
        const fetchConfig = {
            method: "put",
            body: JSON.stringify({ status: 'finished' }),
            headers: {
                "Content-Type": "application/json"
            },
        };
        const response = await fetch(finishUrl, fetchConfig);
        if (response.ok) {
            fetchData();
        };

    }

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
                        <AppointmentForm onSubmit={handleFormSubmit}/>
                    </div>
                    <div className={successMessage} id="success-message">
                        Your appointment has been successfully created!
                    </div>
            </Modal>

            <Group>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <h1 className="mb-3 mt-3">Service Appointments</h1>
                    <Button onClick={open}>Create</Button>
                </div>
            </Group>


            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        const vip = appointment.vip === true ? "Yes" : "No";
                        const date = new Date(appointment.date_time).toLocaleDateString();
                        const time = new Date(appointment.date_time).toLocaleTimeString('en-US', { timeZone: 'UTC', hour: "2-digit", minute: "2-digit"});
                        const technicianName = `${appointment.technician.first_name} ${appointment.technician.last_name}`;

                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>{vip}</td>
                                <td>{appointment.customer}</td>
                                <td>{date}</td>
                                <td>{time}</td>
                                <td>{technicianName}</td>
                                <td>{appointment.reason}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => cancelAppointment(appointment.id)}>Cancel</button>
                                    <button className="btn btn-success" onClick={() => finishAppointment(appointment.id)}>Finish</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )

}

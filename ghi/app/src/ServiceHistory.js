import './index.css';
import React, { useState, useEffect } from 'react';

export default function ServiceHistory() {

    const [appointments, setAppointments] = useState([]);
    const [vin, setVin] = useState('');

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const searchVin = async (vin) => {
        let filteredAppointments = appointments.filter(appointment => appointment.vin === vin);
        setAppointments(filteredAppointments);

    }

    return (
        <>
            <h1 className="mb-3 mt-3">Service History</h1>
            <div className = "input-group mb-3">
                <input onChange={handleVinChange} placeholder="Search by VIN" type="text" value={vin} className="form-control" />
                <button className="btn btn-outline-secondary" onClick={() => searchVin(vin)}>Search</button>
            </div>
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
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        const vip = appointment.vip === true ? "Yes" : "No";
                        const date = new Date(appointment.date_time).toLocaleDateString();
                        const time = new Date(appointment.date_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"});
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
                                <td>{appointment.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )

}

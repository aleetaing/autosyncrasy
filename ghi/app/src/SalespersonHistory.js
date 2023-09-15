import React, { useEffect, useState } from 'react';

function SalespersonHistory() {
    const [sales, setSales] = useState([]);
    const [salesperson, setSalesperson] = useState('');

    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
    }

    const fetchData = async () => {
        const url = 'http://localhost:8090/api/sales/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div>
            <h1 className="mb-3 mt-3">Salesperson History</h1>
            <div className="mb-3">
                        <select onChange={handleSalespersonChange} value={salesperson} required name="salesperson" id="salesperson" className="form-select">
                            <option value="">Choose a salesperson...</option>
                            {sales.map(sales => {
                                const salesFullName = `${sales.salesperson.first_name} ${sales.salesperson.last_name}`
                                return (
                                    <option key={sales.salesperson.employee_id} value={salesFullName}>
                                        {salesFullName}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.filter(sales =>
                    `${sales.salesperson.first_name} ${sales.salesperson.last_name}` === salesperson).map(sales => {
                        const salespersonFullName = `${sales.salesperson.first_name} ${sales.salesperson.last_name}`
                        const customerFullName = `${sales.customer.first_name} ${sales.customer.last_name}`
                            return (
                            <tr key={sales.salesperson.employee_id}>
                                <td>{salespersonFullName}</td>
                                <td>{customerFullName}</td>
                                <td>{sales.automobile.vin}</td>
                                <td>${sales.price}</td>
                            </tr>
                        );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default SalespersonHistory;

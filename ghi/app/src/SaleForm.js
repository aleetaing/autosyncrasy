import React, { useState, useEffect } from 'react';

function SaleForm() {
    const [automobiles, setAutomobiles] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [price, setPrice] = useState('');
    const [automobile, setAutomobile] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');



    const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
    }

    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    }

    const fetchData = async () => {
        const automobileUrl = 'http://localhost:8100/api/automobiles/';
        const salespersonUrl = 'http://localhost:8090/api/salespeople/';
        const customerUrl = 'http://localhost:8090/api/customers/';

        const response1 = await fetch(automobileUrl)
        const response2 = await fetch(salespersonUrl)
        const response3 = await fetch(customerUrl);

        if (response1.ok) {
            const data = await response1.json();
            setAutomobiles(data.autos);
        }

        if (response2.ok) {
            const data = await response2.json();
            setSalespeople(data.salesperson);
        }

        if (response3.ok) {
            const data = await response3.json();
            setCustomers(data.customer);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const updateSold = async (vin) => {

        const updateUrl = `http://localhost:8100/api/automobiles/${vin}/`
        const fetchConfig2 = {
            method: "PUT",
            body: JSON.stringify({sold:true}),
            headers: {
                'Content-Type': 'application/json',
            }

        }
        const response2 = await fetch(updateUrl, fetchConfig2);

        if (response2.ok) {
            fetchData();
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.automobile = automobile;
        data.salesperson = salesperson;
        data.customer = customer;
        data.price = price;


        const saleUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig1 = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response1 = await fetch(saleUrl, fetchConfig1);


        if (response1.ok) {
            const newSale = await response1.json();
            console.log(newSale);
            setAutomobile('');
            setSalesperson('');
            setCustomer('');
            setPrice('');
        }


    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Record a new sale</h1>
                    <form onSubmit={handleSubmit} id="create-sale-form">
                    <div className="mb-3">
                        <select onChange={handleAutomobileChange} value={automobile} required name="auto" id="auto" className="form-select">
                            <option value="">Choose an automobile VIN...</option>
                            {automobiles.map(automobile => {
                                return (
                                    <option key={automobile.vin} value={automobile.vin}>
                                        {automobile.vin}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <select onChange={handleSalespersonChange} value={salesperson} required name="salesperson" id="salesperson" className="form-select">
                            <option value="">Choose a salesperson...</option>
                            {salespeople.map(salesperson => {
                                return (
                                    <option key={salesperson.employee_id} value={salesperson.employee_id}>
                                        {salesperson.employee_id}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="mb-3">
                        <select onChange={handleCustomerChange} value={customer} required name="customer" id="customer" className="form-select">
                            <option value="">Choose a customer...</option>
                            {customers.map(customer => {
                                const fullName = `${customer.first_name} ${customer.last_name}`
                                return (
                                <option key={customer.id} value={customer.id}>
                                    {fullName}
                                </option>
                                );
                            })}
                        </select>
                    </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={handlePriceChange}
                                value={price}
                                placeholder="price"
                                required
                                type="text"
                                id="price"
                                name="price"
                                className="form-control"
                            />
                            <label htmlFor="price">0</label>
                        </div>
                        <button className="btn btn-primary" onClick={() => updateSold(automobile)}>Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SaleForm;

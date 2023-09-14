import './index.css';
import React, { useState } from 'react';

export default function ManufacturerForm({ onSubmit }) {

    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify({name: name}),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
            setName('');
            onSubmit();
        };
    }

    return (
        <>
        {/* <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4"> */}
                    <h3 className="mb-4">Create a Manufacturer</h3>
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Manufacturer name" required type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name">Manufacturer Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                {/* </div>
            </div>
        </div> */}
        </>
    )

}

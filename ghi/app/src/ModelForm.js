import './index.css';
import React, {useState, useEffect } from 'react';

export default function ModelForm() {
    // defining hooks
    const [manufacturers, setManufacturers] = useState([]);
    const [name, setName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [manufacturer, setManufacturer] = useState('');

    // handle event changes
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }


    // Get the manufacturers list data
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    }

    // Calls fetchData function to get data
    useEffect(() => {
        fetchData();
    }, []);

    // handle submit form
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer;
        // console.log(data);


        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            // const newModel = await response.json();
            // console.log(newModel);
            setName('');
            setPictureUrl('');
            setManufacturer('');
        };

    }


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Vehicle Model</h1>
                    <form onSubmit={handleSubmit} id="create-model-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Nodel Name" required type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name">Model Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePictureUrlChange} value={pictureUrl} placeholder="Picture URL" required type="text" id="picture_url" name="picture_url" className="form-control"/>
                            <label htmlFor="picture_url">Picture URL</label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                            <select onChange={handleManufacturerChange} value={manufacturer} required id="manufacturer" name="manufacturer" className="form-select">
                                <option value="">Choose a Manufacturer</option>
                                    {manufacturers.map(manufacturer => {
                                        return (
                                            <option key={manufacturer.id} value={manufacturer.id}>
                                                {manufacturer.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

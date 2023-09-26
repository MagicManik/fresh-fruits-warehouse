import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import updatingImg from './image/updating-stock.png'
import './UpdateStoke.css'

const UpdateStoke = () => {
    const { id } = useParams();

    const [inventory] = useInventory(id);

    const { _id, img, name, price, quantity, description, supplier } = inventory;


    // delivered button handle
    const handleDeliverd = () => {

        // new Quantity
        const newQuantity = parseInt(quantity) - 1;

        if (newQuantity < 0) {
            return alert('Stock Not Available')
        }
        const updatedItem = { newQuantity };

        // update data to server
        const url = `https://fruit-manik-server.onrender.com/inventory/${id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
            })
    };

    // restock form submission handle
    const handleUpdateQuantity = event => {
        event.preventDefault();

        if (!event.target.quantity.value) {
            return alert('Please enter your stock quantity')
        }
        // update quantity
        const restockedQuantity = event.target.quantity.value;
        const newQuantity = parseInt(inventory.quantity) + parseInt(restockedQuantity);

        if (newQuantity < 0) {
            return alert('Insufficient Quantity')
        }

        const updatedItem = { newQuantity };

        // update data to server
        const url = `https://fruit-manik-server.onrender.com/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                event.target.reset();
            })
    };

    return (
        <section className='stock-update-section'>
            <h4 className='text-center pb-4'>Please update your stock of <span className='text-danger'>{name}</span>!</h4>
            <div className='stock-container'>

                <div className='stock'>
                    <img className='stock-img' src={img} alt="" />
                    <div className='stock-details'>
                        <div className='vertical-border'>
                            <h5 className='my-2'>{name}</h5>
                            <p>Product ID: {_id}</p>
                        </div>

                        <div>
                            <h6 className='stock-text'>Per Carton: ${price}</h6>
                            {
                                quantity === 0
                                    ?
                                    <p className='stock-text text-danger fw-bold mt-2'>Sold Out</p>
                                    :
                                    <p className='stock-text text-white fw-bold quantity py-1 mt-2 pe-2'>Quantity: {quantity} </p>
                            }
                            <p className='stock-text mt-1'>Supplier: {supplier}</p>

                        </div>
                    </div>


                    <p className='pt-2'>{description}</p>
                    <div>
                        <button className='restock-btn btn btn-primary' onClick={handleDeliverd} >DELIVERD</button>
                    </div>

                </div>

                <div className='stock'>
                    <img className='restock-img' src={updatingImg} alt="" />

                    <form onSubmit={handleUpdateQuantity}>
                        <h3 className='pb-5 text-center mx-4px'>Update Your Stock</h3>
                        <input className='restock-input' type="number" name="quantity" id="" placeholder='Enter Your Carton Quantity' />

                        <input className='restock-btn btn btn-primary' type="submit" value="Restock" />

                    </form>

                </div>
            </div>
            <div className='inventories-btn-container my-5'>
                <Link className='inventories-btn' to={'/manage'}>Manage Inventories</Link>
            </div>
        </section>
    );
};

export default UpdateStoke;
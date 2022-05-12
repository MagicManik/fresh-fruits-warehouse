import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import updatingImg from './image/updating-stock.png'
import './UpdateStoke.css'

const UpdateStoke = () => {
    const { id } = useParams();

    const [inventory, setInventory] = useInventory(id);

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
        const url = `https://shrouded-mountain-52584.herokuapp.com/inventory/${id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);
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
        const url = `https://shrouded-mountain-52584.herokuapp.com/inventory/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);
                event.target.reset();
            })
    };

    return (
        <section>
            <h3 className='text-center my-5'>Please Update Your <span className='text-danger'>{name}</span> stock !!</h3>
            <div className='stock-container'>

                <div className='stock'>

                    <img className='img-fluid d-block mx-auto' src={img} alt="" />
                    <h5 className='inventory-text my-2'>{name}</h5>
                    <h6 className='inventory-text'>Per Carton: ${price}</h6>
                    <h6 className='inventory-text'>Product ID: {_id}</h6>
                    {
                        quantity === 0
                            ?
                            <p className='text-danger fw-bold'>Sold Out</p>
                            :
                            <p>Quantity: {quantity} </p>
                    }
                    <small className='inventory-text'>{description}</small>
                    <h6 className='inventory-text my-3'>Supplier: <span className='text-primary'>{supplier}</span></h6>

                    <div>
                        <button className='restock-btn' onClick={handleDeliverd} >DELIVERD</button>
                    </div>

                </div>


                <div className='stock'>
                    <img className='img-fluid d-block mx-auto' src={updatingImg} alt="" />

                    <form onSubmit={handleUpdateQuantity}>
                        <h3 className='pb-5 text-center mx-4px'>Update Your Stock</h3>
                        <input className='restock-input' type="number" name="quantity" id="" placeholder='Enter Your Carton Quantity' />

                        <input className='restock-btn' type="submit" value="Restock" />

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
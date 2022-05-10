import React from 'react';
import { useParams } from 'react-router-dom';
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
        const updatedItem = { newQuantity };

        // update data to server
        const url = `http://localhost:5000/inventory/${id}`

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

        // update quantity
        const restockedQuantity = event.target.quantity.value;
        const newQuantity = inventory.quantity + parseInt(restockedQuantity);

        const updatedItem = { newQuantity };

        // update data to server
        const url = `http://localhost:5000/inventory/${id}`
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
            <h3 className='text-center my-5'>Please Update <span className='text-danger'>{name}</span> stock !!</h3>
            <div className='stock-container'>

                <div className='stock'>

                    <img className='img-fluid d-block mx-auto' src={img} alt="" />
                    <h5 className='inventory-text mt-4'>{name}</h5>
                    <h6 className='inventory-text'>Per Carton: ${price}</h6>
                    <h6 className='inventory-text'>Product ID: {_id}</h6>
                    <h6 className='inventory-text'>Quantity Availble: {quantity} </h6>
                    <p className='inventory-text'>{description}</p>
                    <h6 className='inventory-text'>Supplier: <span className='text-primary'>{supplier}</span></h6>

                    <div>
                        <button onClick={handleDeliverd} >DELIVERD</button>
                    </div>

                </div>



                {/* <form onSubmit={handleUpdateQuantity} className='text-center'>
                            <input className='me-2 p-1 w-50' type="number" name="quantity" id="" placeholder='Input Your Item Number' />
                            <input style={{ color: '#220768' }} className='px-3 py-1 fw-bold' type="submit" value="Restock" />
                        </form> */}


                <div className='stock'>
                    <img className='img-fluid d-block mx-auto' src={updatingImg} alt="" />

                    <form onSubmit={handleUpdateQuantity}>
                        <h3 className='pb-5 text-center mx-4px'>Update Your Stock</h3>
                        <input className='input-field mb-4' type="number" name="quantity" id="" placeholder='Enter Your Carton Quantity' />

                        <input className='' type="submit" value="Update" />

                    </form>

                </div>
            </div>
        </section>
    );
};

export default UpdateStoke;
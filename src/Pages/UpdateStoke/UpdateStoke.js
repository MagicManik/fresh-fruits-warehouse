import React from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import updatingImg from './image/updating-stock.png'
import './UpdateStoke.css'

const UpdateStoke = () => {
    const { id } = useParams();

    const [inventory, setInventory] = useInventory(id);

    const { _id, img, name, price, quantity, description, supplier } = inventory;



    // const handleUpdateStock = event => {
    //     event.preventDefault();

    //     const updatedStock = event.target.updatedstock.value;

    //     const newStock = { updatedStock };

    //     const url = `http://localhost:5000/update/${id}`

    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newStock)
    //     })

    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })

    // }


    return (
        <section>
            <h3 className='form-title mt-5'>Please Update <span className='text-danger'>{name}</span> stock !!</h3>
            <div className='stock-container'>
                <div className='stock'>
                    <img className='mx-auto d-block img-fluid' src={img} alt="" />
                    <h4 className='inventory-text mt-4'>{name}</h4>
                    <h5 className='inventory-text'>Per Carton: ${price}</h5>
                    <h5 className='inventory-text'>Product ID: {_id}</h5>
                    <h6 className='inventory-text'>Quantity Availble: {quantity} Carton</h6>
                    <p className='inventory-text'>{description}</p>
                    <h6 className='inventory-text'>Supplier: <span className='text-primary'>{supplier}</span></h6>


                    <div>
                        <button className='inventory-button'>DELIVERD</button>
                    </div>


                </div>

                <div className='stock'>
                    <img className='img-fluid mb-5' src={updatingImg} alt="" />

                    <form>
                        <h1 className='form-title pb-5 mx-4px'>Update Your Stock</h1>
                        <input className='input-field mb-4' type="number" name="updatedstock" id="" placeholder='Enter Your Carton Quantity' />

                        <input className='input-btn w-100' type="submit" value="Update" />

                    </form>

                </div>
            </div>
        </section>
    );
};

export default UpdateStoke;
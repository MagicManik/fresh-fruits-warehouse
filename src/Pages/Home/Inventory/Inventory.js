import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const { _id, img, name, price, supplier, quantity, description } = inventory;

    const sliceDescription = description.slice(0, 100);

    const navigate = useNavigate();

    const handleUpdate = id => {
        navigate(`/update/${id}`)
    }

    return (

        <div className='inventory'>
            <div className='inventory-top'>
                <div className='vertical-border'>
                    <img className='fruits-img' src={img} alt="" />
                </div>
                <div>
                    <h4 className='product-title'>{name}</h4>
                    <h3 className='text-primary price'>${price} /-</h3>
                    <p className='inventory-text'>Supplier: {supplier}</p>
                    {
                        quantity === 0
                            ?
                            <p className='text-danger inventory-text fw-bold'>Sold Out</p>
                            :
                            <p className='inventory-text'>Available Stock: {quantity} </p>
                    }
                </div>
            </div>
            <p className='description-text'>{sliceDescription}..</p>
            <div className='d-flex'>
                <button className='btn btn-primary update-button' onClick={() => handleUpdate(_id)}>Update</button>
            </div>
        </div>
    );
};

export default Inventory;
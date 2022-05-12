import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyStock.css'

const MyStock = ({ stock, handleDeleteStock }) => {

    const { _id, name, price, img, quantity, supplier } = stock;


    const navigate = useNavigate();
    const handlePlusStock = id => {
        navigate(`/update/${_id}`)
    }


    return (
        <div className='inventory-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="inventory-items-details-container">
                <div className="inventory-items-details">
                    <h5 className='mb-1'>{name}</h5>
                    <h6 className='mb-1'>Price: <span style={{ color: '#220768' }}>{price}/-</span></h6>
                    {
                        quantity === 0
                            ?
                            <p className='text-danger fw-bold'>Sold Out</p>
                            :
                            <p>Quantity: {quantity} {name === 'Jackfruit' || name === 'Water Mealon' ? 'Pieces' : 'Kg'}</p>
                    }
                    <p>Supplier: {supplier}</p>
                </div>
                <div className="add-delete-container">

                    <div className='button-container'>
                        <button onClick={() => handlePlusStock(_id)} className='plus-button' >
                            <FontAwesomeIcon className='plus-icon' icon={faPlus}></FontAwesomeIcon>
                        </button>
                    </div>

                    <div>
                        <button onClick={() => handleDeleteStock(_id)} className='delete-button' >
                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyStock;
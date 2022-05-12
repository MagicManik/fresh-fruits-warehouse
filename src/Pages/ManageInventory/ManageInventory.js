import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = ({ items, handleManageInventories }) => {
    const { _id, name, price, img, quantity, supplier } = items;


    const navigate = useNavigate();
    const handlePlusStock = id => {
        navigate(`/update/${id}`)
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
                            <p>Quantity: {quantity} </p>
                    }
                    <p>Supplier: {supplier}</p>
                </div>
                <div className="add-delete-container">

                    <button onClick={() => handlePlusStock(_id)} className='plus-button' >
                        <FontAwesomeIcon className='plus-icon' icon={faPlus}></FontAwesomeIcon>
                    </button>

                    <button onClick={() => handleManageInventories(_id)} className='delete-button' >
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>

                </div>
            </div>

        </div>
    );
};

export default ManageInventory;
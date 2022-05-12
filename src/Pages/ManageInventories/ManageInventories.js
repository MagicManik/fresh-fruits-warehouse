import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventorys from '../../hooks/useInventorys';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [inventorys, setInventorys] = useInventorys();
    // use navigate hook
    const navigate = useNavigate();


    // add items button handler
    const AddItemsButtonHandle = () => {
        navigate('/add');
    }

    const handleManageInventories = id => {
        const proceed = window.confirm('Are you sure to delete?');

        if (proceed) {

            const url = `https://shrouded-mountain-52584.herokuapp.com/inventory/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingStocks = inventorys.filter(stock => stock._id !== id);
                    setInventorys(remainingStocks);
                })
        }
    }

    return (


        <section className='inventories-section py-5'>

            <div className='mx-auto my-2 container'>
                <div className="title-text">
                    <h1 className='text-center'>Manage All Inventories</h1>
                </div>
                <div className='ineventory-container'>
                    {
                        inventorys.map(items =>
                            <ManageInventory key={items._id} items={items} handleManageInventories={handleManageInventories}>
                            </ManageInventory>)
                    }
                </div>

            </div>
            <button onClick={AddItemsButtonHandle} className='inventories-btn-container d-block my-5 text-primary fw-bold border-0'>Add More Items</button>
        </section>
    );
};

export default ManageInventories;
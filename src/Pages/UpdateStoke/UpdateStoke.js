import React from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const UpdateStoke = () => {
    const { id } = useParams();

    const [inventory, setInventory] = useInventory(id);
    console.log(inventory)

    return (
        <div>
            <h1>This is my update stoke compooo: {inventory.name}</h1>
        </div>
    );
};

export default UpdateStoke;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const description = event.target.description.value;
        const img = event.target.url.value;
        const email = user.email

        const item = { name, price, quantity, description, img, supplier, email };

        // console.log(item);


        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your item successfully added.')
                    event.target.reset();
                }
            })



        // ....... 
        // name
        // price
        // quantity
        // supplier
        // description
        // img
    }

    return (
        <div className='update-container'>
            <form onSubmit={handleAddItem} className='update-form mx-auto'>
                <h2 className='update-title'>Please add your iTem</h2>

                <input className='add-input-field' type="text" name="name" id="" placeholder='Fruit name' required />

                <textarea className='add-input-field' name="description" id="" cols="30" rows="2" placeholder='Fruit description' required></textarea>

                <input className='add-input-field' type="text" name="price" id="" placeholder='Price' required />

                <input className='add-input-field' type="number" name="quantity" id="" placeholder='Quantity' required />

                <input className='add-input-field' type="text" name="url" id="" placeholder='Picture URL' required />

                <input className='add-input-field' type="text" name="supplier" id="" placeholder='Your name' required />



                <input className='add-item-button' type="submit" value="Add iTem" />




            </form>
        </div>
    );
};

export default AddItem;
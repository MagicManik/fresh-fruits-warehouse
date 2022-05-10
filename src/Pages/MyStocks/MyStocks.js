import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import MyStock from './MyStock';
import './MyStocks.css'

const MyStocks = () => {

    const [user] = useAuthState(auth);
    const [stocks, setStocks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;

            const url = `https://fresh-fruits-warehouse.herokuapp.com/stock?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url);
                setStocks(data)
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();
    }, [user, navigate])


    // Delete items button handler
    const handleDeleteStock = id => {

        const proceed = window.confirm('Are you sure to delete?');

        if (proceed) {

            const url = `https://fresh-fruits-warehouse.herokuapp.com/inventory/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingStocks = stocks.filter(stock => stock._id !== id);
                    setStocks(remainingStocks);
                })
        }
    };


    return (
        <section className='inventories-section py-5'>
            <div className='mx-auto my-2 container'>
                <div className="title-text">
                    <h1 className='text-center'>All Items Are Added By You</h1>
                </div>
                <div className='ineventory-container'>
                    {
                        stocks.map(stock =>

                            <MyStock key={stock._id} stock={stock}
                                handleDeleteStock={handleDeleteStock}>
                            </MyStock>

                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default MyStocks;
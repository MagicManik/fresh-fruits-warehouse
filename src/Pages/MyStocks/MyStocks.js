import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyStocks = () => {


    const [user] = useAuthState(auth);
    const [stocks, setStocks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;

            const url = `http://localhost:5000/stock?email=${email}`
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
    }, [user])



    return (
        <div>
            <h1>This is my stocke componetnt {stocks.length}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, consequatur qui repudiandae sit voluptates rerum voluptatem maxime accusantium ratione officia voluptate quisquam odit, distinctio porro nam perferendis praesentium, odio reprehenderit!</p>
        </div>
    );
};

export default MyStocks;
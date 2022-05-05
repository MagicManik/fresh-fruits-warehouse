import React, { useState } from 'react';
import loginImage from '../image/login.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // _______ to collecte input value _______
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }


    // collect from fire base hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    // Password Reset Event Handler
    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        else {
            alert('Please Enter Your Email Address')
        }
    }


    // user navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    // handle error
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    // Form Submit Event Handler
    const handleLoginForm = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }


    return (
        <section className='form-section'>

            <div className='form-image'>
                <img src={loginImage} alt="" />
            </div>

            <div>

                <form onSubmit={handleLoginForm} className='form-container'>
                    <h3 className='form-title'>WELCOME BACK!!</h3>

                    <input onBlur={handleEmail} className='input-field' type="email" name="email" id="" placeholder='Your Email' required />

                    <input onBlur={handlePassword} className='input-field' type="password" name="password" id="" placeholder='Password' required />

                    <input className='mx-auto input-btn' type="submit" value="REGISTER" />

                    {errorElement}

                </form>


                <div className='method-divider-container mt-0'>

                    <p className='mx-auto m-2'>FORGOTTEN PASSWORD? <button className='link-button' onClick={handleResetPassword}>Password Reset</button></p>

                    <p className='mx-auto mb-2'> New To Our Warehouse?<Link className='link-button' to={'/register'}> Please Register</Link></p>

                    <div className='d-flex'>
                        <div className='right-divider'></div>
                        <p className='mx-2'>or</p>
                        <div className='left-divider'></div>
                    </div>

                    <SocialLogin></SocialLogin>

                </div>


            </div>
        </section>);
};

export default Login;
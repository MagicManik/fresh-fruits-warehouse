import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import loginImage from '../image/login.png';
import './Login.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sending email');
        }
        else {
            alert('Please before enter your email address')
        }
    }


    const [token] = useToken(user);


    let errorElement;
    if (error) {
        errorElement = <p className='text-danger text-center mb-0 mt-2'>Error: {error?.message}</p>
    }




    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // after get verified user redirect to the previous page
    if (token) {
        navigate(from, { replace: true });
    }


    if (loading || sending) {
        return <Loading></Loading>
    }


    // catch input email
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    // catch input password
    const handlePassword = event => {
        setPassword(event.target.value)
    }


    // ______ handle submit form _______
    const handleLoginForm = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <section className='form-section'>

            <div className='form-image'>
                <img className='img-fluid' src={loginImage} alt="" />
            </div>

            <div>

                <form onSubmit={handleLoginForm} className='form-container'>
                    <h3 className='form-title'>WELCOME BACK!!</h3>

                    <input onBlur={handleEmail} className='input-field' type="email" name="email" id="" placeholder='Your Email' required />

                    <input onBlur={handlePassword} className='input-field' type="password" name="password" id="" placeholder='Password' required />

                    <input className='mx-auto input-btn' type="submit" value="LOGIN" />

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
                    <ToastContainer></ToastContainer>

                </div>


            </div>
        </section>
    );
};

export default Login;
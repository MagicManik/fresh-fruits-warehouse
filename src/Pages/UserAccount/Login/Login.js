import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import loginImage from '../image/login.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLoginForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)

    }
    return (
        <section className='form-section'>

            <div className='form-image'>
                <img src={loginImage} alt="" />
            </div>

            <div>

                <form onSubmit={handleLoginForm} className='form-container'>


                    <input className='input-field' type="email" name="email" id="" placeholder='Your Email' />

                    <input className='input-field' type="password" name="password" id="" placeholder='Password' />

                    <input className='mx-auto input-btn' type="submit" value="REGISTER" />

                </form>


                <div className='method-divider-container mt-3'>

                    <p className='mx-auto'>New to our Warehouse <Link className='link-button' to={'/register'}>Please Register</Link></p>
                    <p className='mx-auto'>Forgotten Password? <button className='link-button'>Password Reset</button></p>

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
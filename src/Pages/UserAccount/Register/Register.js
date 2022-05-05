import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import registrationImage from '../image/register.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate();
    if (user) {
        navigate('/')
    }

    const handleRegisterForm = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <section className='form-section'>

            <div className='form-image'>
                <img src={registrationImage} alt="" />
            </div>

            <div>

                <form onSubmit={handleRegisterForm} className='form-container'>

                    <input className='input-field' type="text" name="name" id="" placeholder='Your Name' />

                    <input className='input-field' type="email" name="email" id="" placeholder='Your Email' />

                    <input className='input-field' type="password" name="password" id="" placeholder='Password' />

                    <input className='mx-auto input-btn' type="submit" value="REGISTER" />

                </form>


                <div className='method-divider-container mt-3'>
                    <p className='mx-auto'>Already have an accout? <Link className='link-button' to={'/login'}>Please Login</Link></p>

                    <div className='d-flex'>
                        <div className='right-divider'></div>
                        <p className='mx-2'>or</p>
                        <div className='left-divider'></div>
                    </div>

                </div>


            </div>
        </section>);
};

export default Register;
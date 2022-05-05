import React from 'react';
import { Link } from 'react-router-dom';
import registrationImage from '../image/register.png'
import './Register.css'

const Register = () => {
    return (
        <section className='form-section'>

            <div className='form-image'>
                <img src={registrationImage} alt="" />
            </div>

            <div>

                <form className='form-container'>

                    <input className='input-field' type="text" name="" id="" placeholder='Your Name' />

                    <input className='input-field' type="email" name="" id="" placeholder='Your Email' />

                    <input className='input-field' type="password" name="" id="" placeholder='Password' />

                    <input className='mx-auto input-btn' type="submit" value="REGISTER" />

                </form>




                <div className='method-divider-container mt-3'>
                    <p className='mx-auto'>Already have an accout? <Link to={'/login'}>Please Login</Link></p>




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
import { faClock, faEnvelope, faHandPointRight, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section>
            <div className='footer-container'>
                <div className='mb-3 py-3'>
                    <h2>About</h2>
                    <hr />
                    <p><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> 1206, Kafrul Dhaka</p>
                    <p>Bangladesh</p>
                    <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> connect@freshwarehouse.com</p>
                    <p> <FontAwesomeIcon icon={faHandPointRight}></FontAwesomeIcon> FreshFruitsWarehouse <Link to={'/about'}>About</Link></p>

                </div>


                <div className='mb-3 py-3'>
                    <h2 className='text-center'>Connect Us</h2>

                    <div className='social-icon-container'>
                        <p><FaFacebook className='social-icon' /></p>
                        <p><FaInstagram className='social-icon'></FaInstagram></p>
                        <p><FaTwitter className='social-icon'></FaTwitter></p>
                        <p><FaYoutube className='social-icon'></FaYoutube></p>

                    </div>

                </div>


                <div className='mb-3 py-3'>
                    <h2 className='text-center'>Opening Our</h2>
                    <hr />

                    <p className='text-center'> <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon> Saturday - Wednesday : 9am - 5pm </p>

                    <p className='text-center'> <FontAwesomeIcon icon={faClock} ></FontAwesomeIcon> Thursday and Friday : 9am - 12pm </p>
                </div>
            </div>

            <div>
                <p className='text-center mt-3'>Copyright &copy; 2022 freshruitswarehouse.com </p>
            </div>
        </section>
    );
};

export default Footer;
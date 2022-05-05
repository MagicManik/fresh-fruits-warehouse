import React from 'react';
import google from '../image/google.png'
import facebook from '../image/facebook.png'
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div>

            <div className='social-login-container'>
                <button className='social-login-btn'><img src={google} alt="" /> Goooogle Login</button>
            </div>
            <div className='social-login-container'>
                <button className='social-login-btn'><img src={facebook} alt="" /> Facebook Login</button>
            </div>

        </div>
    );
};

export default SocialLogin;
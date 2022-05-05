import React from 'react';
import google from '../image/google.png'
import facebook from '../image/facebook.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import './SocialLogin.css'
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            {
                errorElement
            }

            <div>
                <button onClick={() => signInWithGoogle()} className='social-login-btn'><img src={google} alt="" /> Goooogle Login</button>
            </div>
            <div>
                <button className='social-login-btn'><img src={facebook} alt="" /> Facebook Login</button>


            </div>



        </div>
    );
};

export default SocialLogin;
import React from 'react';
import google from '../image/google.png'
import facebook from '../image/facebook.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SocialLogin.css'
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    // Using firebase hook
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [token] = useToken(user);

    if (loading) {
        return <Loading></Loading>
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (token) {
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
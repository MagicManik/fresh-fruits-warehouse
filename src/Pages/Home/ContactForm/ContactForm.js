import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css'

const ContactForm = () => {

    const handleEmail = event => {
        event.preventDefault();
        return toast('Sending email');;
    }


    return (
        <section className='contact-form-container'>
            <div className='update-container'>
                <form onSubmit={handleEmail} className='update-form mx-auto'>
                    <h2 className='update-title'>Contact Us</h2>

                    <input className='add-input-field' type="text" name="name" id="" placeholder='Your name' required />

                    <input className='add-input-field' type="email" name="supplier" id="" placeholder='Your email address' required />

                    <textarea className='add-input-field' name="email" id="" cols="30" rows="3" placeholder='Your email' required></textarea>

                    <input className='add-item-button' type="submit" value="Send" />

                </form>
                <ToastContainer></ToastContainer>
            </div>
        </section>
    );
};

export default ContactForm;
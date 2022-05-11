import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OurPackage.css'

const OurPackage = () => {
    return (
        <section className='pakage-container'>

            <div className='pakage'>
                <h3 className='pakage-title'>Silver</h3>
                <h1 className='my-4 text-center'><sup>$</sup>189<sub>/Year</sub></h1>
                <p className='pacakage-text'>Basic Management your product</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Limited space access</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Secuirty facility</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Support 10pm - 5pm</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Well managed</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> pay as bill</p>

                <button onClick={() => alert('Silver Package Successfully Booked !')} className='book-now-btn'>Book Now</button>

            </div>

            <div className='pakage golden-package'>
                <h3 className='pakage-title text-primary'>Golden</h3>
                <h1 className='my-4 text-center text-primary'><sup className='text-secondary'>$</sup>289<sub className='text-secondary'>/Year</sub></h1>
                <p className='pacakage-text'>Standard Management Your Producst with full space</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> <span></span> Full space access</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Experienced team</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Latest technology support</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Support only day time</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> pay as plan</p>

                <button onClick={() => alert('Goldren Package Successfully Booked !')} className='book-now-btn'>Book Now</button>

            </div>

            <div className='pakage'>
                <h3 className='pakage-title'>Platinum</h3>
                <h1 className='my-4 text-center'><sup>$</sup>389<sub>/Year</sub></h1>
                <p className='pacakage-text'>Full space used and support 24/7 hours with Experienced team</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Live support 24/7 hours</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Guide and monitor your event</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Exprienced team support</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Latest technology support</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Premium feature used</p>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> pay as plan</p>

                <button onClick={() => alert('Platinum Successfully Booked !')} className='book-now-btn'>Book Now</button>

            </div>

        </section>
    );
};

export default OurPackage;
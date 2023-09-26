import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from './images/banner1.png';
import banner2 from './images/feat.png';
import banner3 from './images/banner3.png';
import './Banner.css'
import { useNavigate } from 'react-router-dom';


const Banner = () => {
    const navigate = useNavigate();
    const handleMyWarehouse = () => {
        navigate('/mystocks')
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section style={{ maxWidth: "1440px", margin: "0 auto" }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className='carousel-body'>
                        <div className='col-lg-6 col-12 p-3'>
                            <h1 className='carousel-heading'>Fresh Fruits Warehouse
                                !!</h1>
                            <p className='carousel-text'>Feel free to stock your fruit in Fresh Fruits Warehouse. We provide you with a clean space as well as a conducive environment to prevent fruit rot and keep your fruit fresh. Also our monitoring team members will monitor your stock all the time and keep you updated about your stock. So feel free to stock your fruit in our ware house.</p>
                            <button onClick={handleMyWarehouse} className='my-warehouse-btn'>MY WAREHOUSE</button>

                        </div>
                        <div className='col-lg-6 col-12'>
                            <img className="d-block img-fluid" src={banner1} alt="First slide" />
                        </div>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className='carousel-body'>
                        <div className='col-lg-6 col-12 p-3'>
                            <h1 className='carousel-heading'>Fresh Fruits Warehouse !!</h1>
                            <p className='carousel-text'>Feel free to stock your fruit in Fresh Fruits Warehouse. We provide you with a clean space as well as a conducive environment to prevent fruit rot and keep your fruit fresh. Also our monitoring team members will monitor your stock all the time and keep you updated about your stock. So feel free to stock your fruit in our ware house.</p>
                            <button onClick={handleMyWarehouse} className='my-warehouse-btn'>MY WAREHOUSE</button>

                        </div>
                        <div className='col-lg-6 col-12'>
                            <img className="d-block img-fluid" src={banner2} alt="First slide" />
                        </div>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className='carousel-body'>
                        <div className='col-lg-6 col-12 p-3'>
                            <h1 className='carousel-heading'>Fresh Fruits Warehouse !!</h1>
                            <p className='carousel-text'>Feel free to stock your fruit in Fresh Fruits Warehouse. We provide you with a clean space as well as a conducive environment to prevent fruit rot and keep your fruit fresh. Also our monitoring team members will monitor your stock all the time and keep you updated about your stock. So feel free to stock your fruit in our ware house.</p>
                            <button onClick={handleMyWarehouse} className='my-warehouse-btn'>MY WAREHOUSE</button>


                        </div>
                        <div className='col-lg-6 col-12'>
                            <img className="d-block img-fluid" src={banner3} alt="First slide" />
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>

        </section>


    );
};

export default Banner;
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
        <section>
            <Carousel className='mt-4' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className='carousel-body'>
                        <div className='col-lg-6 col-12 p-3'>
                            <h1 className='carousel-heading'>Fresh Fruits Warehouse
                                !!</h1>
                            <p className='carousel-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aperiam fuga quidem, dolorum voluptatibus consequatur corporis eaque dolor facilis nisi animi perspiciatis accusamus exercitationem facere quisquam quaerat laboriosam eveniet qui.</p>
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
                            <p className='carousel-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aperiam fuga quidem, dolorum voluptatibus consequatur corporis eaque dolor facilis nisi animi perspiciatis accusamus exercitationem facere quisquam quaerat laboriosam eveniet qui.</p>
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
                            <p className='carousel-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aperiam fuga quidem, dolorum voluptatibus consequatur corporis eaque dolor facilis nisi animi perspiciatis accusamus exercitationem facere quisquam quaerat laboriosam eveniet qui.</p>
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
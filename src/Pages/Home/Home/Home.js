import React from 'react';
import { Link } from 'react-router-dom';
import useInventorys from '../../../hooks/useInventorys';
// import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Inventory from '../Inventory/Inventory';
import OurPackage from '../OurPackage/OurPackage';
import './Home.css'
import Loading from '../../Shared/Loading/Loading';

const Home = () => {
    const [inventorys] = useInventorys();
    const sliceInventoy = inventorys.slice(0, 8);

    return (
        <main style={{ backgroundColor: "#f5f5f7", maxWidth: "1440px", margin: "0 auto" }}>
            <Banner></Banner>
            <section className='inventory-section'>
                {
                    inventorys.length === 0 ?
                        <Loading />
                        :
                        <>
                            <div className='inventory-container'>
                                {
                                    sliceInventoy.map(inventory =>
                                        <Inventory
                                            key={inventory._id} inventory={inventory}>
                                        </Inventory>
                                    )
                                }
                            </div>
                            <div>
                                <div className='inventories-btn-container'>
                                    <Link className='inventories-btn' to={'/manage'}>Manage Inventories</Link>
                                </div>
                            </div>
                        </>
                }
            </section>

            <OurPackage></OurPackage>
            <ContactForm></ContactForm>
        </main>
    );
};

export default Home;
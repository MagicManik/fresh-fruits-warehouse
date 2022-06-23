import React from 'react';
import { Link } from 'react-router-dom';
import useInventorys from '../../../hooks/useInventorys';
// import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Inventory from '../Inventory/Inventory';
import OurPackage from '../OurPackage/OurPackage';
import './Home.css'

const Home = () => {

    const [inventorys] = useInventorys();

    const sliceInventoy = inventorys.slice(0, 8);

    // if (inventorys.length === 0) {
    //     return <Loading></Loading>
    // }

    return (
        <main>
            <Banner></Banner>

            <section className='inventory-section'>
                <div className='inventory-container'>
                    {
                        sliceInventoy.map(inventory =>
                            <Inventory
                                key={inventory._id} inventory={inventory}>
                            </Inventory>
                        )
                    }
                </div>
                <div className='pb-5'>
                    <div className='inventories-btn-container'>
                        <Link className='inventories-btn' to={'/manage'}>Manage Inventories</Link>
                    </div>
                </div>
            </section>



            <OurPackage></OurPackage>
            <ContactForm></ContactForm>
        </main>
    );
};

export default Home;
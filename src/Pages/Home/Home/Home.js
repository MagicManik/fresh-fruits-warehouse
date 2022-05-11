import React from 'react';
import useInventorys from '../../../hooks/useInventorys';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Inventory from '../Inventory/Inventory';
import OurPackage from '../OurPackage/OurPackage';
import './Home.css'

const Home = () => {

    const [inventorys, setInventorys] = useInventorys();

    const sliceInventoy = inventorys.slice(0, 6);

    return (
        <main>
            <Banner></Banner>

            <div className='inventory-container'>
                {
                    sliceInventoy.map(inventory =>
                        <Inventory
                            key={inventory._id} inventory={inventory}>
                        </Inventory>
                    )
                }
            </div>

            <OurPackage></OurPackage>
            <ContactForm></ContactForm>
        </main>
    );
};

export default Home;
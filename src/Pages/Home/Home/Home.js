import React from 'react';
import useInventorys from '../../../hooks/useInventorys';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
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
        </main>
    );
};

export default Home;
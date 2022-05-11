import { useEffect, useState } from "react"

const useInventorys = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-mountain-52584.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data))
    }, []);

    return [inventorys, setInventorys];
};

export default useInventorys;
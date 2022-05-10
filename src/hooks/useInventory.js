import { useEffect, useState } from "react"

const useInventory = id => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        fetch(`https://fresh-fruits-warehouse.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [id, inventory]);

    return [inventory, setInventory];
}

export default useInventory;
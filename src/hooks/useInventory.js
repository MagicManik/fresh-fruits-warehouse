import { useEffect, useState } from "react"

const useInventory = id => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        fetch(`https://shrouded-mountain-52584.herokuapp.com/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [id, inventory]);

    return [inventory, setInventory]
}

export default useInventory;
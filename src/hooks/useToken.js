// Use Token Hook
import { useEffect, useState } from "react";
import axios from "axios";


const useToken = user => {

    // token load state
    const [token, setToken] = useState('');


    // fetch data
    useEffect(() => {

        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://shrouded-mountain-52584.herokuapp.com/login', { email })
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user])

    return [token, setToken];
};

export default useToken;
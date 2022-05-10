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
                const { data } = await axios.post('http://localhost:5000/login', { email })
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user])

    return [token, setToken];
};

export default useToken;
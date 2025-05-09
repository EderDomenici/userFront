import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
})
export function useApi(method, url, payLoad) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log('entrou')
   useEffect(() => {
    setLoading(true);
    try{
       const response = axios({
           method: method,
           url: url,
           data: payLoad
       })
       setData(response.data);
       return response.data
    } catch(err){
        setError(err.response?.data || err.message);
        throw err;
    } finally {
        setLoading(false);
    }
   }, []);

    return { data, loading, error };

}
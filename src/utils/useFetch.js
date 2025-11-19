import { useEffect, useState } from "react";

function useFetch(url){

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(url)
            const result = await response.json();
            setData(result.products)
            } catch (err) {
                setError(err)
            }finally{
                setIsLoading(false)
            }
        }

        fetchData();
    },[])

    return {data, error, isLoading}
    
}

export default useFetch;
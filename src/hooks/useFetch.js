import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(response => {
            if(!response.ok){
                throw Error('could not fetch data for that resource')
            }
            return response.json();
        })
        .then((data) => {
            console.log(data)
            setData(data);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else {
                setError(err.message);
            }
        })
        .finally(() =>
            setIsPending(false)
        )
        return () => abortCont.abort();
    }, [url]);
    return {data, isPending, error};
}

export default useFetch;
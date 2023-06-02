import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: abortCont.signal, headers: {
          "auth-token": JSON.parse(localStorage.getItem("user"))?.token || undefined
        } });

        if (!response.ok) {
          throw new Error('Could not fetch the data for that resource');
        }

        const responseData = await response.json();
        setData(responseData);
        setIsPending(false);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      }
    };

    fetchData();

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
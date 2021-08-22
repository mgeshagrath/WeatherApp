import { useEffect, useState } from 'react';
import { PROXY, WEATHER_API } from '../utility';

export const useHttp = (endPoint, query) => {
  const [dataFetched, setDataFetched] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${PROXY}${WEATHER_API}${endPoint}${query}`);
        if (!response.ok) throw new Error('Something went wrong!');

        const data = await response.json();
        // console.log(data);

        if (data.length === 0) throw new Error('We could not find anything!');

        setDataFetched(data);
        setError('')
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (!query) return;

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, endPoint]);

  return {
    loading,
    error,
    dataFetched,
  };
};

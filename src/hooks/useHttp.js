import { useEffect, useState } from 'react';
import { PROXY, WEATHER_API } from '../utility';

export const useHttp = (endPoint, query) => {
  const [dataFetched, setDataFetched] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (query.includes('undefined') || !query) return;
        const response = await fetch(`${PROXY}${WEATHER_API}${endPoint}${query}`);
        if (!response.ok) throw new Error('Something went wrong!');
        const data = await response.json();
        if (data.length === 0) throw new Error('We could not find anything!');
        setDataFetched(data);
        setError('');
      } catch (err) {
        if (err.message === 'Unexpected end of JSON input') {
          setError(true);
          return;
        }
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (!query) return;

    fetchData();
  }, [query, endPoint]);

  return {
    loading,
    error,
    dataFetched,
  };
};

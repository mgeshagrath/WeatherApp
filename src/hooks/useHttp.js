import { useEffect, useState } from 'react';

export const useHttp = (url, proxy) => {
  const [dataFetched, setDataFetched] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${proxy}${url}`);
      const data = await response.json();
      setDataFetched(data);
    };
    fetchData();
  });

  return dataFetched;
};

import { useState, useEffect } from 'react';
import { message } from 'antd';
import axios from "axios";

export function useApi() {
  // hardcoded URL can be removed and passed by param if needed
  const URL = '/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json';
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]         = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const result = await axios.get(URL);
      setData(result.data);
    } catch (error) {
      message.error('Some error occurred during fetching data');
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => { fetchData() }, []);

  return [ data, isLoading, error, fetchData ];
};

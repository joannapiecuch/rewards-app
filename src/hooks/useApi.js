import { useCallback, useEffect, useState } from 'react';
import { API_REQUEST_STATUS } from '../const/status';

export const useApi = (callApiFunc) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [status, setStatus] = useState('');

  const execute = useCallback(async () => {
    setStatus(API_REQUEST_STATUS.LOADING);
    setData(null);
    setError(null);

    try {
      const result = await callApiFunc();
      setData(result.data);
      console.log(result);
      setStatus(API_REQUEST_STATUS.SUCCESS);
    } catch (e) {
      setError(e);
      setStatus(API_REQUEST_STATUS.ERROR);
    }
  }, [callApiFunc]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { status, data, error };
};

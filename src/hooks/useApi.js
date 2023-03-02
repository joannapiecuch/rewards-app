import { useCallback, useEffect, useState } from 'react';

export const useApi = (callApiFunc) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  const execute = useCallback(async () => {
    setLoading(true);
    setData(null);
    setError(null);

    try {
      const result = await callApiFunc();
      setData(result.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [callApiFunc]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { isLoading, data, error };
};

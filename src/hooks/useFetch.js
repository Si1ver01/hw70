import { useCallback, useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const doFetch = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();
        setResponse(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    },
    []
  );

  const clearResponse = useCallback(() => setResponse(null), []);

  return [{ loading, error, response }, doFetch,clearResponse];
};

export default useFetch;

import { useEffect, useState, useCallback } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const controller = new AbortController();

    try {
      const response = await fetch(url, { signal: controller.signal });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result); // return full JSON, not just products
    } catch (err) {
      if (err.name === "AbortError") return; // ignore abort error
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }

    return () => controller.abort();
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    error,
    isLoading,
    refetch: fetchData, // retry function
  };
}

export default useFetch;

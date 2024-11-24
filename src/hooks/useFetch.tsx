import { useState } from "react";

type Callback<T> = (data: T) => void;

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = <T,>(url: string, cb: Callback<T>): void => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        cb(data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, error, fetchData };
};

export default useFetch;

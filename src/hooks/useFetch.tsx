import { useState } from "react";

type Callback<T> = (data: T) => void;

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = <T,>(url: string, cb: Callback<T>): void => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        cb(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return { isLoading, error, fetchData };
};

export default useFetch;

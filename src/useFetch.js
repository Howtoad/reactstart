import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("things are not okay");
        }
        return response.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
        setPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setPending(false);
      });
  }, []);
  return { data, pending, error };
};

export default useFetch;

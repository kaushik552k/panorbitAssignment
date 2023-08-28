import { useState, useEffect } from "react";
import axios from "axios";
import { User_API } from "./helpers";

const useUserData = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios
      .get(User_API)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // custom hook returns value
  return { response, error, loading };
};

export default useUserData;

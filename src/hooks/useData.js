import { useState , useEffect } from "react";
import apiClient from "../utils/api-Client";

const useData = (endpoint , customConfig , deps) => {

  const [data , setData] = useState(null);
  const [error , setError] = useState('');
  const [isLoading , setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient.get(endpoint , customConfig)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      })
  } , deps ? deps : []);

  return { data , error , isLoading };

}

export default useData
import { useState , useEffect } from "react";
import apiClient from "../utils/api-Client";

const useData = (url) => {

  const [data , setData] = useState(null);
  const [error , setError] = useState('');

  useEffect(() => {
    apiClient.get(url)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
  } , []);

  return { data , error };

}

export default useData
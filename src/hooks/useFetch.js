import {useEffect, useState} from 'react'

const useFetch = (fetchFn, initVal)=>{
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initVal);

    useEffect(() => {
        async function fetchNewData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data!' });
          }
    
          setIsFetching(false);
        }
    
        fetchNewData();
      }, [fetchFn]);

      return {
        isFetching,
        error,
        fetchedData,
        setFetchedData
      }
}

export default useFetch;
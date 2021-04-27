import {useState, useEffect} from 'react';
import { UseResourceResult } from 'react-request-hook';
import { useContextProvider, ContextResource } from '@learn-harmony/movies.context.api-context-provider';

export const ApiHookFactory = (
  apiContext: (props?:any) => ContextResource<any>,
  processData: (data) => any[]
): [
  (searchFor: string) => Promise<void>,
  any[],
  boolean,
  string,
] => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [apiDataResult, getApitData] = useContextProvider(apiContext);

  useEffect(() => handleDataReturn(), [apiDataResult])

  const handleDataReturn = () => {
    if (apiDataResult.isLoading) {
      setIsLoading(true);
      return;
    }
    if (!apiDataResult.data) return;
    const { data }  = apiDataResult;
    const list = processData(data);
    setApiData(list);
    if (error) setError('');
    setIsLoading(false);
  }

  const apiCall = async (searchFor: string) => {
    if (!searchFor) return;

    setIsLoading(true);
    try {
      getApitData(searchFor);
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };

  return [apiCall, apiData, isLoading, error];
};

import {useState, useEffect} from 'react';
import { UseResourceResult } from 'react-request-hook';
import { useContextProvider, ContextResource } from '@learn-harmony/movies.context.api-context-provider';

/**
 * This is a factory for producing apiWithContext hooks. These hooks assume there is a ApiContextProvider provider 
 * from the api-context-provider component being injected into the consuming app
 * 
 * @param apiContext 
 * @param processData 
 */
export const ApiHookFactory = <TPropType, > (
  apiContext: (props?:TPropType) => ContextResource<any>,
  processData: (data) => any[]
): [
  (props: TPropType) => Promise<void>,
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

  const apiCall = async (props: TPropType) => {
    if (!props) return;

    setIsLoading(true);
    try {
      getApitData({...props});
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };

  return [apiCall, apiData, isLoading, error];
};

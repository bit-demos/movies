import {useState, useEffect} from 'react';
import { useContextProvider, ContextResource } from '@teambit/movie-demo.context.api-context-provider';
import { Movie, MovieFromApi, MovieResponse } from '@teambit/movie-demo.movies.model.movie';

export const useSearchMovies = (): [
  (searchFor: string) => Promise<void>,
  Movie[],
  boolean,
  string,
] => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchResult, searchMovies] = useContextProvider((searchStr: string): ContextResource<MovieResponse> => ({
      params: {
        s: searchStr
      }
    })
  );

  useEffect(() => handleDataReturn(), [searchResult])

  const handleDataReturn = () => {
    if (searchResult.isLoading) {
      setIsLoading(true);
      return;
    }
    if (!searchResult.data) return;
    const { data }  = searchResult;
    const list = data.Search && data.Search.length ? data.Search.map(
      (m: MovieFromApi) => Movie.fromApiObject(m)
    ) : [];
    setMovies(list);
    if (error) setError('');
    setIsLoading(false);
  }

  const getMovies = async (searchFor: string) => {
    if (!searchFor) return;

    setIsLoading(true);
    try {
      searchMovies(searchFor);
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };

  return [getMovies, movies, isLoading, error];
};

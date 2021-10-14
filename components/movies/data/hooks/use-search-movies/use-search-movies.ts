import type { MoviesContextResource } from '@learn-bit-react/movies.movies.context.movies-api-context';
import { UseMovieContext } from '@learn-bit-react/movies.movies.context.movies-api-context';
import { Movie, MovieFromApi, MovieResponse } from '@learn-bit-react/movies.models.movie';
import { ApiHookFactory } from '@learn-bit-react/movies.utils.hooks.api-hook-factory';

export const useSearchMovies = () => {

  const apiCallConfig = (searchStr: string): MoviesContextResource => ({
      params: {
        s: searchStr
      }
    });

    const processData = (data) : Movie[] =>  {
       return data.Search && data.Search.length ? data.Search.map(
      (m: MovieFromApi) => Movie.fromApiObject(m)
    ) : [];
    }

  return ApiHookFactory(apiCallConfig, processData, UseMovieContext);
};

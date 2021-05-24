import { ContextResource } from '@learn-harmony/movies.context.api-context-provider';
import { Movie, MovieFromApi, MovieResponse } from '@learn-harmony/movies.models.movie';
import { ApiHookFactory } from '@learn-harmony/movies.utils.hooks.api-hook-factory';

export const useSearchMovies = () => {

  const apiCallConfig = (searchStr: string): ContextResource<MovieResponse> => ({
      params: {
        s: searchStr
      }
    });

    const processData = (data) : Movie[] =>  {
       return data.Search && data.Search.length ? data.Search.map(
      (m: MovieFromApi) => Movie.fromApiObject(m)
    ) : [];
    }

  return ApiHookFactory(apiCallConfig, processData);
};

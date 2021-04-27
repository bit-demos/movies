import {useState, useEffect} from 'react';
import { useContextProvider, ContextResource } from '@learn-harmony/movies.context.api-context-provider';
import { Movie, MovieFromApi, MovieResponse } from '@learn-harmony/movies.models.movie';
import { ApiHookFactory } from '@learn-harmony/movies.utils.api-hook-factory';

export const useSearchMovies = () => {

  const apiContext = (searchStr: string): ContextResource<MovieResponse> => ({
      params: {
        s: searchStr
      }
    });

    const processData = (data) =>  {
       return data.Search && data.Search.length ? data.Search.map(
      (m: MovieFromApi) => Movie.fromApiObject(m)
    ) : [];
    }

  return ApiHookFactory(apiContext, processData);
};

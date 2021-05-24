import React, { useEffect } from 'react';
import { Label } from '@teambit/base-ui.elements.label';
import { Movie, MovieFromApi, MovieResponse } from '@learn-harmony/movies.models.movie';
import { ContextResource } from '@learn-harmony/movies.context.api-context-provider';
import { ApiHookFactory } from './api-hook-factory';

// implement concrete hook from the factory
function exampleMoviesHook(){
    const apiCallConfig = (searchStr: string): ContextResource<MovieResponse> => ({
        params: {
        s: searchStr
        }
    });

    const processData = (data): Movie[] =>  {
        return data.Search && data.Search.length ? data.Search.map(
        (m: MovieFromApi) => Movie.fromApiObject(m)
    ) : [];
    }

    return ApiHookFactory(apiCallConfig, processData);
}

export const BasicFactoryProducedHookMovies = () => {

    // use new hook
    const [getMovies, movies, isLoading, error] = exampleMoviesHook();

    useEffect(() => {
        getMovies("dream");
    }, [])

    return (
        <div style={{display:"flex", flexDirection:"column", width:300}}>
            <div>Search Movies with our new Movies Hook - results of "dream"</div>
            {!isLoading && movies && movies.map(m => {
                return (<Label key={m.imdbID} style={{maxWidth:300, marginBottom:10}}>{m.title}</Label>)
            })}
        </div>
    )
};

import React, {ReactNode} from 'react';
import axios from 'axios';
import { MovieResponse } from '@learn-harmony/movies.models.movie';
import { ApiContextProvider, useApiContext, ContextResource } from '@learn-harmony/movies.context.api-context-provider';

const defaultBaseUrl = 'https://www.omdbapi.com';
const defaultApiKey = '35fdde3e';

export type MovieApiContextProps = {
    baseUrl?: string;
    apiKey?: string;
    children?: ReactNode;
}

export function MovieApiContextProvider({ baseUrl, apiKey, children}: MovieApiContextProps){
    const axiosInstance = axios.create({
        baseURL: baseUrl || defaultBaseUrl,
        params: {
        apikey: apiKey || defaultApiKey
        }
    });
    return <ApiContextProvider apiInstance={axiosInstance}>{children}</ApiContextProvider>
}

export const UseMovieContext = useApiContext;

export type MoviesContextResource = ContextResource<MovieResponse>;



import React, { useState } from 'react';

import { Input } from '@learn-harmony/movies.base-ui.input';
import { PrimaryButton } from '@learn-harmony/movies.base-ui.button';
import { MovieCard } from '@learn-harmony/movies.movies.ui.movie-card';
import { useSearchMovies } from './index';

export const SearchMoviesWithInput = () => {
    const [getMovies, movies, isLoading, error] = useSearchMovies();
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <Input style={{width:300}} onInput={e => setInputValue(e.currentTarget.value)} value={inputValue} onChange={() => {}}></Input>
            <PrimaryButton onClick={() => getMovies(inputValue)}>Get Movies</PrimaryButton>
            {movies && movies.map(movie => {
                return (
                    <div key={movie.imdbID}>
                        <MovieCard movie={movie}/>
                    </div>
                    )
                }
            )}
        </div>
    )
}
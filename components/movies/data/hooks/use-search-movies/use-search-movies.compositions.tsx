import React from 'react';
import { SearchBoxWithButton } from '@learn-bit-react/movies.base-ui.search-box-with-button';
import { MovieCard } from '@learn-bit-react/movies.movies.ui.movie-card';
import { useSearchMovies } from './index';

export const SearchMoviesWithInput = () => {
    const [getMovies, movies, isLoading, error] = useSearchMovies();
    return (
        <div>
            <SearchBoxWithButton 
                inputPlaceholder="Search Movies"
                buttonText="Get Movies"
                onSubmit={getMovies}
            />
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
import React, { useContext } from 'react';
import { FavouritesContextProvider, CreateFavouritesContext } from '@learn-bit-react/movies.context.favourites-context';
import { Movie } from '@learn-bit-react/movies.models.movie';

export const MovieFavouritesContext = CreateFavouritesContext<Movie>();

export const useMoviesFavouritesContext = () => useContext(MovieFavouritesContext);

export function MoviesFavouritesContextProvider({children}) {
    return (
        <FavouritesContextProvider<Movie> idFieldName="imdbID" context={MovieFavouritesContext}>{children}</FavouritesContextProvider>
    )
}

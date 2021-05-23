import React from 'react'
import { FavouritesContextProvider, CreateFavouritesContext } from '@learn-harmony/movies.context.favourites-context'
import { Movie } from '@learn-harmony/movies.models.movie'

export const MovieFavouritesContext = CreateFavouritesContext<Movie>();

export function MoviesFavouritesContextProvider({children}) {
    return (
        <FavouritesContextProvider<Movie> idFieldName="imdbID" context={MovieFavouritesContext}>{children}</FavouritesContextProvider>
    )
}

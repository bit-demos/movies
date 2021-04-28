import { createContext } from 'react';
import { Movie, MovieForFavourites } from '@learn-harmony/movies.models.movie';
import {} from '@learn-harmony/movies.models.movie'

export type FavouritesContextType = {
  favourites: MovieForFavourites[],
  AddToFavourites: (movie: Movie) => void,
  RemoveFromFavourites: (movie: Movie) => void,  
};

const defaultContext: FavouritesContextType = {
  favourites: [],
  AddToFavourites: () => {},
  RemoveFromFavourites: () => {}
}

export const FavouritesContext = createContext<FavouritesContextType>(defaultContext);

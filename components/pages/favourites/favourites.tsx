import React, {useContext} from 'react';
import { MovieFavouritesContext } from '@learn-harmony/movies.movies.context.movies-favourites-context'
import { MovieCardGrid } from '@learn-harmony/movies.movies.ui.movie-card-grid';

export function Favourites() {

  const favesContext = useContext(MovieFavouritesContext);

 return (
   <div>
     <MovieCardGrid list={favesContext.favourites.map(f => f.item)} />
   </div>
 )
}

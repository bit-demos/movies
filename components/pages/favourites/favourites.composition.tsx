import React from 'react';
import { MoviesSearch } from '@learn-bit-react/movies.movies.movies-search';
import { MovieCard } from '@learn-bit-react/movies.movies.ui.movie-card';
import { mockMovieList, Movie } from '@learn-bit-react/movies.models.movie';
import { Favourites } from './favourites';

export const FavouritesWithMovieCard = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <MovieCard key="movie1" movie={Movie.fromApiObject(mockMovieList[0])}/>
      <hr />
      <div>Favourites:</div>
      <Favourites />
    </div>
  )
}
 
export const FavouritesWithSearch = () => {

  return (
  <div style={{display: "flex", flexDirection: "column"}}>
    <div>Favourites:</div><Favourites />
    <hr />
    <MoviesSearch />
  </div>
  )
};

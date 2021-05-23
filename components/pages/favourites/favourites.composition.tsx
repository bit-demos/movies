import React from 'react';
import { MoviesSearch } from '@learn-harmony/movies.movies.movies-search';
import { MovieCard } from '@learn-harmony/movies.movies.ui.movie-card';
import { mockMovieList, Movie } from '@learn-harmony/movies.models.movie';
import { Favourites } from './favourites';

export const FavouritesWithMovieCard = () => {
  return (
    <>
      <MovieCard key="movie1" movie={Movie.fromApiObject(mockMovieList[0])}/>
      <Favourites />
    </>
  )
}
 
export const FavouritesWithSearch = () => {

  return (
  <div>
    <MoviesSearch />
    <Favourites />
  </div>
  )
};

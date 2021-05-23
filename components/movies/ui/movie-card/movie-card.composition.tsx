// @ts-ignore
import React from 'react';
import {MovieCard} from './movie-card';
import { Movie, MovieType } from '@learn-harmony/movies.models.movie';

const movie = new Movie(
  "The Wolf of Wall Street",
  "1984",
  "tt0993846",
  MovieType.movie,
  "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
)

export const MovieCardExample = () => (
    <MovieCard movie={movie}/>
);

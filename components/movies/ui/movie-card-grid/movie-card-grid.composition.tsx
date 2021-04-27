import React from 'react';
import { Movie, mockMovieList } from '@learn-harmony/movies.models.movie';
import { MovieCardGrid } from './movie-card-grid';

const movieList = mockMovieList.map(movie => Movie.fromApiObject(movie));

export const MovieCardGridExample = () => (
    <MovieCardGrid list={movieList} />
);

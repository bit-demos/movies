// @ts-ignore
import React from 'react';
import { SearchBoxWithButton } from '@teambit/movie-demo.base-ui.search-box-with-button';
import { MovieCardGrid } from '@teambit/movie-demo.movies.ui.movie-card-grid';
import { useSearchMovies } from '@teambit/movie-demo.movies.data.hooks.use-search-movies';



export const MoviesSearch = () => {
  const [getMovies, movies, isLoading, error] = useSearchMovies();

  const onSearchClicked = (searchTerm: string) => {
      getMovies(searchTerm);
  }

  return (
  <div >    
    <SearchBoxWithButton onClicked={onSearchClicked} inputPlaceholder="search term" buttonText="Search Movies"/>
    <MovieCardGrid list={movies} /> 
  </div>
  )
}

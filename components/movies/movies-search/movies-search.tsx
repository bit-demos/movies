// @ts-ignore
import React from 'react';
import { DotsLoader } from '@teambit/base-ui.elements.dots-loader';
import { SearchBoxWithButton } from '@learn-harmony/movies.base-ui.search-box-with-button';
import { MovieCardGrid } from '@learn-harmony/movies.movies.ui.movie-card-grid';
import { useSearchMovies } from '@learn-harmony/movies.movies.data.hooks.use-search-movies';
import styles from './movies-search.module.scss';



export const MoviesSearch = () => {
  const [getMovies, movies, isLoading, error] = useSearchMovies();

  const onSearchClicked = (searchTerm: string) => {
      getMovies(searchTerm);
  }

  return (
  <div className={styles["movies-search-wrapper"]}>    
    <SearchBoxWithButton onClicked={onSearchClicked} inputPlaceholder="search term" buttonText="Search Movies"/>
    {isLoading ? <DotsLoader /> : error ? error : <MovieCardGrid list={movies} /> }
  </div>
  )
}

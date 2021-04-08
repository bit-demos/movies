import React from 'react';
import cs from 'classnames';
import dellStyles from '@teambit/movie-demo.styling.bootstrap-override';
import { Movie } from '@teambit/movie-demo.movies.model.movie';
import { MovieCard } from '@teambit/movie-demo.movies.ui.movie-card';
import styles from './movie-card-grid.module.scss';

type Props = {
  list: Movie[];
};

export const MovieCardGrid = ({list}: Props) => {
  return (
    <div className={cs(styles["container"], dellStyles["container-fluid"])}>
      {list.length > 0 ?
        list.map((movie) => (
            <div className={cs(dellStyles["col-lg-3"], dellStyles["col-sm-6"],  dellStyles["col-md-4"], styles["movie-card"] )} key={movie.imdbID}>
              <MovieCard {...movie}/>
            </div>
        )) :
        "No movies to display"}
    </div>
  );
};

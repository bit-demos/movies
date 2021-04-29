import React from 'react';
import cs from 'classnames';
import { Grid } from '@teambit/base-ui.layout.grid-component';
import { Movie } from '@learn-harmony/movies.models.movie';
import { MovieCard } from '@learn-harmony/movies.movies.ui.movie-card';
import styles from './movie-card-grid.module.scss';

type Props = {
  list: Movie[];
};

export const MovieCardGrid = ({list}: Props) => {
  return (
    <>
        {
        list.length > 0 ?
          <Grid colMd={2} colLg={3} className={cs(styles.grid)}>
            {list.map((movie) => (
                <div className={cs(styles["movie-card"] )} key={movie.imdbID}>
                  <MovieCard movie={movie}/>
                </div>
            ))} 
          </Grid>
           :
          "No movies to display"
          }
    </>
  );
};

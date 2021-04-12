import React from 'react';
import cs from 'classnames';
import { Grid } from '@teambit/base-ui.layout.grid-component';
// import dellStyles from '@teambit/movie-demo.styling.bootstrap-override';
import { Movie } from '@teambit/movie-demo.movies.model.movie';
import { MovieCard } from '@teambit/movie-demo.movies.ui.movie-card';
import styles from './movie-card-grid.module.scss';

type Props = {
  list: Movie[];
};

export const MovieCardGrid = ({list}: Props) => {
  return (
    <Grid colMd={3} colLg={3} className={cs(styles.grid)}>
      {/* <div className={cs(styles["container"])}> */}
        {list.length > 0 ?
          list.map((movie) => (
              <div className={cs(styles["movie-card"] )} key={movie.imdbID}>
                <MovieCard {...movie}/>
              </div>
          )) :
          "No movies to display"}
      {/* </div> */}
    </Grid>
  );
};

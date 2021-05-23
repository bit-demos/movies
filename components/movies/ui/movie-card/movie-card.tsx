// @ts-ignore
import React, {useContext} from 'react';
import cs from 'classnames';
import { MovieFavouritesContext } from '@learn-harmony/movies.movies.context.movies-favourites-context';
import {PrimaryButton} from '@learn-harmony/movies.base-ui.button';
import { Card } from '@learn-harmony/movies.base-ui.card';
import {Movie} from '@learn-harmony/movies.models.movie';
// @ts-ignore
import styles from './movie-card.module.scss';


export const MovieCard = ({movie}:{movie: Movie}) => {
    const { posterUrl, title} = movie;
    const cartContext = useContext(MovieFavouritesContext);
    function addProductToFaves(){
      cartContext.AddToFavourites(movie);
    }
    return (
        <div className={styles["container"]}>
            <Card img={posterUrl}>
                <div className={cs(styles.contentContainer)}>
                    <span className={styles.title}>{title}</span>
                    <PrimaryButton
                        onClick={() => {
                            addProductToFaves()
                            // TODO add navigation to movie details page using the imdbID to fetch movie details
                        }}
                        className={styles.button}
                    >Add To Favourites
                    </PrimaryButton>
                </div>
            </Card>
        </div>
    );
};

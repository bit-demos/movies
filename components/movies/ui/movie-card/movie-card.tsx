// @ts-ignore
import React from 'react';
import {PrimaryButton} from '@teambit/movie-demo.base-ui.button';
import {Card} from '@teambit/movie-demo.base-ui.card';
import {Movie} from '@teambit/movie-demo.movies.model.movie';
// @ts-ignore
import styles from './movie-card.module.scss';


export const MovieCard = ({title, posterUrl}: Movie) => {
    return (
        <div className={styles["container"]}>
            <Card img={posterUrl}>
                <span className={styles["title"]}>{title}</span>
                <PrimaryButton
                    onClick={() => {
                        // TODO add navigation to movie details page using the imdbID to fetch movie details
                    }}
                    className={styles.button}
                >Click For Details
                </PrimaryButton>

            </Card>
        </div>
    );
};

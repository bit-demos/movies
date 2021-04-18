// @ts-ignore
import React from 'react';
import cs from 'classnames';
import {PrimaryButton} from '@learn-harmony/movies.base-ui.button';
import { Card } from '@learn-harmony/movies.base-ui.card';
import {Movie} from '@learn-harmony/movies.movies.model.movie';
// @ts-ignore
import styles from './movie-card.module.scss';


export const MovieCard = ({title, posterUrl}: Movie) => {
    return (
        <div className={styles["container"]}>
            <Card img={posterUrl}>
                <div className={cs(styles.contentContainer)}>
                    <span className={styles.title}>{title}</span>
                    <PrimaryButton
                        onClick={() => {
                            // TODO add navigation to movie details page using the imdbID to fetch movie details
                        }}
                        className={styles.button}
                    >Click For Details
                    </PrimaryButton>
                </div>
            </Card>
        </div>
    );
};

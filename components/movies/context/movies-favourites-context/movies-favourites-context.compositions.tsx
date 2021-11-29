import React from 'react';
import { PrimaryCtaButton } from '@learn-bit-react/movies.base-ui.button';
import { Movie, getRandomMockMovie } from '@learn-bit-react/movies.models.movie';
import { MoviesFavouritesContextProvider, useMoviesFavouritesContext } from './index';
import styles from './movies-favourites-context.module.scss';


function AddToFavouritesComponent(){
    const context = useMoviesFavouritesContext();

    function onButtonClick(){
        context.AddToFavourites(Movie.fromApiObject(getRandomMockMovie()));
    }

    return (
        <PrimaryCtaButton style={{ width: 120 }} onClick={onButtonClick}>
            Add Another Movie
        </PrimaryCtaButton>
    )
}

function ShowFavouritesComponent(){
    const context = useMoviesFavouritesContext();
    return (
        <div>
            <b>Favourites list:</b> <br />
            {context.favourites.map(f => {
                return (
                    <div key={f.item.imdbID}>
                        {f.item.title}
                    </div>
                )})}
        </div>
    )
}

export function BasicMoviesFavouritesContextExample(){
    return (
        <MoviesFavouritesContextProvider>
            <div className={styles.vertical}>
                <AddToFavouritesComponent />
                <ShowFavouritesComponent />
            </div>
        </MoviesFavouritesContextProvider>
    )
}
import React, {useContext} from 'react';
import { Button } from '@learn-harmony/design.button';
import { Movie, getRandomMockMovie } from '@learn-harmony/movies.models.movie';
import { MovieFavouritesContext, MoviesFavouritesContextProvider} from './index';
import styles from './movies-favourites-context.module.scss';


function AddToFavouritesComponent(){
    const context = useContext(MovieFavouritesContext);

    function onButtonClick(){
        context.AddToFavourites(Movie.fromApiObject(getRandomMockMovie()));
    }

    return (
        <Button importance="cta" style={{ width: 120 }} onClick={onButtonClick}>
            Add Another Movie
        </Button>
    )
}

function ShowFavouritesComponent(){
    const context = useContext(MovieFavouritesContext)
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
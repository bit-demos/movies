import React, {useContext} from 'react';
import { Button } from '@learn-harmony/design.button';
import { Movie, getRandomMockMovie } from '@learn-harmony/movies.models.movie';
import { MovieFavouritesContext, MoviesFavouritesContextProvider} from './index';

function AddToFavouritesComponent(){
    const context = useContext(MovieFavouritesContext);

    function onButtonClick(){
        context.AddToFavourites(Movie.fromApiObject(getRandomMockMovie()));
    }

    return (
        <Button importance="cta" style={{ width: 120 }} onClick={onButtonClick}>
        Submit
    </Button>
    )
}

function showFavouritesComponent(){
    return (
        <div>
            
        </div>
    )
}

export function BasicMoviesFavouritesContextExample(){

}
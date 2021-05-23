import React, { useContext } from 'react';
import { Movie, getRandomMockMovie } from '@learn-harmony/movies.models.movie';
import { FavouritesContextProvider, CreateFavouritesContext } from './index';

const contextObject = CreateFavouritesContext<Movie>();

const MockUpdateContextComponent = () => {
  const context = useContext(contextObject);
  
  function addItemToFavourites(){
    context.AddToFavourites(Movie.fromApiObject(getRandomMockMovie()));
    console.log(context.favourites.length)
  }
  return (
    <div>
      <button onClick={addItemToFavourites}>add to faves</button>
    </div>
  )
}

const MockFavesDisplay = () => {
  const context = useContext(contextObject);

  return (
    <div>
      {context.favourites.map(f => {
        return <div>{f.item.title} - Number of fans: <strong>{f.numOfFans}</strong></div>
      })}
    </div>
  )
}

export const BasicThemeUsage = () => {

  return (
    <FavouritesContextProvider<Movie> idFieldName="imdbID" context={contextObject}>
      <MockUpdateContextComponent />
      <MockFavesDisplay />
    </FavouritesContextProvider>
  );
};

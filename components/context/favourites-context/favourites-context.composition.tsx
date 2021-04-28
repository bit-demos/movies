import React, { useContext } from 'react';
import { Movie, mockMovieList } from '@learn-harmony/movies.models.movie';
import { ShoppingCartContextProvider, ShoppingCartContext } from './index';

const MockUpdateContextComponent = () => {
  const cartContext = useContext(ShoppingCartContext);
  const movieIndex = Math.floor(Math.random() * mockMovieList.length);
  function addProductToCart(){
    cartContext.AddProductToCart(Movie.fromApiObject(mockMovieList[movieIndex]));
  }
  return (
    <div>
      <button onClick={addProductToCart}>add product</button>
    </div>
  )
}

const MockShoppingCartDisplay = () => {
  const cartContext = useContext(ShoppingCartContext);

  return (
    <div>
      {cartContext.productsInCart.map(m => {
        return (
        <div key={m.imdbID}>
          {m.title}<br/>
          {m.posterUrl}
        </div>
        )
      })}
    </div>
  )
}

export const BasicThemeUsage = () => {
  return (
    <ShoppingCartContextProvider>
      <MockUpdateContextComponent />
      <MockShoppingCartDisplay />
    </ShoppingCartContextProvider>
  );
};

import React, { useState } from 'react';
import { FavouritesContext, FavouritesContextType } from './favourites-context';
import { Movie, MovieForFavourites } from '@learn-harmony/movies.models.movie';

export function ShoppingCartContextProvider({ children }) {
  const [faveMovies, setFaveMovies] = useState<MovieForFavourites[]>([]);

  function findInFavourites(movie: Movie): number{
    return faveMovies.findIndex(p => p.movie.imdbID === movie.imdbID);
  }

  const addToCart = (movie: Movie) => {
    const index = findInFavourites(movie);
    if (index === -1){
      const newMovie: MovieForFavourites = {movie, quantity:1};
      setFaveMovies([...faveMovies, newMovie])
    } else {
      const updatedFaves = faveMovies;
      updatedFaves[index] = {movie: faveMovies[index].movie, quantity: faveMovies[index].quantity+1}
      setProducts(updatedProducts)
    }
  }

  const removeFromCart = (product: Movie) => {
    const newProductsList = products.filter(p => p.imdbID != product.imdbID)
    setProducts(newProductsList);
  }

  const contextValue: FavouritesContextType = {
    favourites: products,
    AddProductToCart: addToCart,
    RemoveProductFromCart: removeFromCart
  }

  return <FavouritesContext.Provider value={contextValue}>{children}</FavouritesContext.Provider>
}

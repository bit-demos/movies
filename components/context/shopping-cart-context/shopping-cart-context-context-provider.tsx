import React, { useState } from 'react';
import { ShoppingCartContext, ShoppingCartContextType } from './shopping-cart-context-context';
import { Movie } from '@learn-harmony/movies.models.movie';

export function ShoppingCartContextProvider({ children }) {
  const [products, setProducts] = useState<Movie[]>([]);

  const addToCart = (product: Movie) => {
    const newProductsList = [...products, product];
    setProducts(newProductsList)
  }

  const removeFromCart = (product: Movie) => {
    const newProductsList = products.filter(p => p.imdbID != product.imdbID)
    setProducts(newProductsList);
  }

  const contextValue: ShoppingCartContextType = {
    productsInCart: products,
    AddProductToCart: addToCart,
    RemoveProductFromCart: removeFromCart
  }

  return <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>
}

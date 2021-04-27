import { createContext } from 'react';
import { Movie,  } from '@learn-harmony/movies.models.movie';
import {} from '@learn-harmony/movies.models.movie'

export type ShoppingCartContextType = {
  productsInCart: Movie[],
  AddProductToCart: (product: Movie) => void,
  RemoveProductFromCart: (product: Movie) => void,  
};

const defaultContext: ShoppingCartContextType = {
  productsInCart: [],
  AddProductToCart: () => {},
  RemoveProductFromCart: () => {}
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>(defaultContext);

import React, {useContext} from 'react';
import { ShoppingCartContext } from '@learn-harmony/movies.context.shopping-cart-context'
import { MovieCardGrid } from '@learn-harmony/movies.movies.ui.movie-card-grid';

export function ShoppingCart() {

  const cartContext = useContext(ShoppingCartContext);

 return (
   <div>
     <MovieCardGrid list={cartContext.productsInCart} />
   </div>
 )
}

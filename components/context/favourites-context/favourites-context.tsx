import { createContext } from 'react';

export type FavouritesListItem<TItemType> = {
  item: TItemType,
  numOfFans: number
}

export type FavouritesContextType <TItemType, > = {
  favourites: FavouritesListItem<TItemType>[],
  AddToFavourites: (item: TItemType) => void,
  RemoveFromFavourites: (item: TItemType) => void,  
};

const defaultContext: FavouritesContextType<any> = {
  favourites: [],
  AddToFavourites: () => {},
  RemoveFromFavourites: () => {}
}

export function CreateFavouritesContext<TItemType>(){
  return createContext<FavouritesContextType<TItemType>>(defaultContext)
}
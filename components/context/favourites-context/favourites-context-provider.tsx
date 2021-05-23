import React, { useState, HTMLAttributes } from 'react';
import { FavouritesContextType, FavouritesListItem } from './favourites-context';

export type FavouritesContextProps<TItemType> = {
  idFieldName: string,
  context: React.Context<FavouritesContextType<TItemType>>
} & HTMLAttributes<HTMLDivElement>

export function FavouritesContextProvider<TItemType>({ children, idFieldName, context }: FavouritesContextProps<TItemType>) {
  const [favourites, setFavourites] = useState<FavouritesListItem<TItemType>[]>([]);

  function findInFavourites(item: TItemType): number{
    return favourites.findIndex(p => p.item[idFieldName] === item[idFieldName]);
  }

  const addToFaves = (item: TItemType) => {
    const index = findInFavourites(item);
    if (index === -1){
      const newItem: FavouritesListItem<TItemType> = {item, numOfFans:1};
      setFavourites([...favourites, newItem])
    } else {
      const updatedFaves = favourites;
      updatedFaves[index] = {item: favourites[index].item, numOfFans: favourites[index].numOfFans+1}
      setFavourites(updatedFaves)
    }
  }

  const removeFromFaves = (item: TItemType) => {
    const newFavesList = favourites.filter(m => m.item[idFieldName] != item[idFieldName])
    setFavourites(newFavesList);
  }

  const contextValue: FavouritesContextType<TItemType> = {
    favourites: favourites,
    AddToFavourites: addToFaves,
    RemoveFromFavourites: removeFromFaves
  }
  
  return <context.Provider value={contextValue}>{children}</context.Provider>
}

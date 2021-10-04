import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { FavouritesWithMovieCard } from './favourites.composition';

describe('favourites', () => {
  it('should add to favourites', async () => {
    const { getByText } = render(<FavouritesWithMovieCard />);
    const button = getByText('Add To Favourites');
    fireEvent.click(button);
    const movie = await screen.findByText('The A-Team');
    expect(movie).toBeDefined;
  });

});

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { FavouritesWithSearch, FavouritesWithMovieCard } from './favourites.composition';

describe('favourites', () => {
  it('should add to favourites', async () => {
    const { getByText } = render(<FavouritesWithMovieCard />);
    const button = getByText('Add To Favourites');
    fireEvent.click(button);
    const movie = await screen.findByText('The A-Team');
    expect(movie).toBeDefined;
    // TODO simulate button click and check that favourite was added
  });

  it('should render with the correct text', () => {
    const { getByText } = render(<FavouritesWithSearch />);
    const rendered = getByText('Search Movies');
    expect(rendered).toBeTruthy();
    // TODO simulate button click and check that favourite was added
  });
});

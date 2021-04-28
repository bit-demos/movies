import React from 'react';
import { render } from '@testing-library/react';
import { BasicShoppingCart } from './shopping-cart.composition';

describe('shopping-cart', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicShoppingCart />);
    const rendered = getByText('hello from ShoppingCart');
    expect(rendered).toBeTruthy();
  });
});

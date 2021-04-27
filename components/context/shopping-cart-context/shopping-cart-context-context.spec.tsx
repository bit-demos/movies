import React from 'react';
import { BasicThemeUsage } from './shopping-cart-context-context.composition';
import { render } from '@testing-library/react';

describe('ShoppingCartContextProvider', () => {
  it('should render the button in the color blue', () => {
    const { getByText } = render(<BasicThemeUsage />);

    const rendered = getByText('this should be blue');
    expect(rendered).toBeTruthy();
  });
});

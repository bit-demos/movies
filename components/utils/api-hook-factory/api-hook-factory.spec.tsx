import React from 'react';
import { render } from '@testing-library/react';
import { BasicApiHookFactory } from './api-hook-factory.composition';

describe('api-hook-factory', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicApiHookFactory />);
    const rendered = getByText('hello from ApiHookFactory');
    expect(rendered).toBeTruthy();
  });
});

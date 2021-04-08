import React from 'react';
import {render} from '@testing-library/react';
import {InputWithPlaceHolder, SimpleInput} from './input.composition';

describe('Input component', () => {
  it('renders correctly', () => {
    render(<SimpleInput />);
  });

  it('renders correctly with place holder', () => {
    render(<InputWithPlaceHolder />);
  });
});

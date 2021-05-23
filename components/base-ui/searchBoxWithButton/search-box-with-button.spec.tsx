import React from 'react';
import {render} from '@testing-library/react';
import { SearchBoxWithPlaceholder } from './search-box-with-button.compositions';
import { SearchBoxWithButton } from './search-box-with-button';

describe('Search Box With Button component', () => {
    it('renders correctly', () => {
      render(<SearchBoxWithButton />);
    });
  
    it('renders correctly with place holder', () => {
      render(<SearchBoxWithPlaceholder />);
    });
  

  });
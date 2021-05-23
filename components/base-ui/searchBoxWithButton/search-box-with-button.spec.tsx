import React from 'react';
import {render, getByPlaceholderText} from '@testing-library/react';
import { SimpleSearch, SearchBoxWithPlaceholder } from './search-box-with-button.compositions';
import { SearchBoxWithButton } from './search-box-with-button';
import styles from './search-box-with-button.module.scss';

describe('Search Box With Button component', () => {
    it('renders correctly', () => {
      render(<SearchBoxWithButton />);
    });
  
    it('renders correctly with place holder', () => {
      render(<SearchBoxWithPlaceholder />);
    });
  

  });
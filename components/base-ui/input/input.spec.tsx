import React from 'react';
import {render, getByPlaceholderText} from '@testing-library/react';
import {InputWithPlaceHolder, SimpleInput, InputWithCustomStyles} from './input.composition';
import { Input } from './input';
import styles from './input.module.scss'
;
describe('Input component', () => {
  it('renders correctly', () => {
    render(<SimpleInput />);
  });

  it('renders correctly with place holder', () => {
    render(<InputWithPlaceHolder />);
  });

  // it('overrides classes via className prop', () => {
  //   const { getByPlaceholderText } = render(<Input placeHolder="test placeholder" className={styles["test-classname-orange-background"]}/>)
  //   const displayedInput = getByPlaceholderText("test placeholder");
  //   const renderedBgColor = window.getComputedStyle(displayedInput).getPropertyValue("background-color");
  //   expect(renderedBgColor).toEqual("orange");
  // })
});

import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { Card, defaultProps } from './card';
import { CardWithText, c, CardWithLink } from './card.compositions';

it('should render with children', () => {
	const { getByText } = render(<CardWithLink />);
	const rendered = getByText('Some interesting link text');
	expect(rendered).to.exist;
});

it('should display default image when none is supplied', () => {
	render(<CardWithText />);
	const displayedImage = document.querySelector("img");
	expect(displayedImage.src).to.equal(defaultProps.img);
});
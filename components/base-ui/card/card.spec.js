import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { Card, defaultProps } from './card';

it('should render with children', () => {
	const children = (
		<a  href="#" onClick={() => {return false}} aria-label="A useful link description goes here">
                        Some interesting link text
                    </a>
	)
	const img = "https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg";
	const { getByText } = render(<Card img={img}>{children}</Card>);
	const rendered = getByText('Some interesting link text');
	expect(rendered).to.exist;
});

it('should display default image when none is supplied', () => {
	const children = "some child text";
	render(<Card img={undefined}>{children}</Card>);
	const displayedImage = document.querySelector("img");

	expect(displayedImage.src).to.equal(defaultProps.img);
});
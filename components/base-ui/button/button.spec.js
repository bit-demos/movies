import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import { fake } from 'sinon';

import { Button } from './button';

it('should render with children', () => {
	const { getByText } = render(<Button>Click</Button>);
	const rendered = getByText('Click');
	expect(rendered).to.not.exist;
});

it('should trigger onClick', () => {
	const onClick = fake();
	const { getByText } = render(<Button onClick={onClick}>actual button</Button>);
	const rendered = getByText('actual button');

	//could use userEvents.click(), in @testing-library/user-event
	fireEvent.click(rendered);

	expect(onClick.called).to.be.true;
});
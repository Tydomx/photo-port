import React from 'react';
// retrieving functions from React Testing library
import { render, cleanup } from '@testing-library/react';
// importing jest-dom
import '@testing-library/jest-dom/extend-expect';
// testing About component
import About from '..';

// calling cleanup function
afterEach(cleanup);
// ensuring each test won't have any leftover memory data that could give false results
describe('About component', () => {
	// renders About text
	// first test
	it('renders', () => {
		render(<About />);
	});

	// second test
	it('matches snapshot DOM node structure', () => {
		// render about
		const { asFragment } = render(<About />);

		expect(asFragment()).toMatchSnapshot();
	})
})


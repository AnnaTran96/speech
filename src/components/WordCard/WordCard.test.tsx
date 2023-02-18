import React from 'react';
import { render, screen } from '@testing-library/react';
import WordCard from './WordCard';

it('should render WordCard component', () => {
	render(<WordCard />);
	const container = screen.getByTestId('wordCard-container');
	expect(container).toBeInTheDocument();
});

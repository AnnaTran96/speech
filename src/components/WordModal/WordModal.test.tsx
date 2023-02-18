import React from 'react';
import { render, screen } from '@testing-library/react';
import WordModal from './WordModal';

it('should render WordModal component', () => {
	render(<WordModal />);
	const container = screen.getByTestId('wordModal-container');
	expect(container).toBeInTheDocument();
});

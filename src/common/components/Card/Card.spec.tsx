import { render, screen } from '@testing-library/react';

import Card from './Card';

it('should render Card component', () => {
	render(<Card />);
	const container = screen.getByTestId('Card-container');
	expect(container).toBeInTheDocument();
});

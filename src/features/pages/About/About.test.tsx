import { render, screen } from '@testing-library/react';

import About from './About';

it('should render About component', () => {
	render(<About />);
	const container = screen.getByTestId('about-container');
	expect(container).toBeInTheDocument();
});

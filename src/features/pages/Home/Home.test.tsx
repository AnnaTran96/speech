import { render, screen } from '@testing-library/react';

import Home from './Home';

it('should render Home component', () => {
	render(<Home />);
	const container = screen.getByTestId('home-container');
	expect(container).toBeInTheDocument();
});

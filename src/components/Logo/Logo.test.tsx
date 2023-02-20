import { render, screen } from '@testing-library/react';

import Logo from './Logo';

it('should render Logo component', () => {
	render(<Logo />);
	const container = screen.getByTestId('logo-container');
	expect(container).toBeInTheDocument();
});

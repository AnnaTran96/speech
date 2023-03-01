import { render, screen } from '@testing-library/react';

import Logo from './Logo';

describe('Logo Component', () => {
	beforeEach(() => {
		render(<Logo />);
	});

	it('should render Logo component', () => {
		const container = screen.getByTestId('logo-container');
		expect(container).toBeInTheDocument();
	});

	it('should render logo name', () => {
		const name = screen.queryByText('Speech');
		expect(name).toBeVisible();
	});
});

import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button Component', () => {
	beforeEach(() => {
		render(<Button onClick={() => ''} className='' />);
	});

	it('should render Button component', () => {
		const container = screen.getByTestId('button-container');
		expect(container).toBeInTheDocument();
	});
});

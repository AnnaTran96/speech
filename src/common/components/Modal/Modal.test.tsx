import { render, screen } from '@testing-library/react';

import Modal from './Modal';

it('should render Modal component', () => {
	render(<Modal />);
	const container = screen.getByTestId('modal-container');
	expect(container).toBeInTheDocument();
});

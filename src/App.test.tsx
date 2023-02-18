import { render, screen } from '@testing-library/react';

import App from './App';

test('renders App component', () => {
	render(<App />);
	const container = screen.getByTestId('app-heading');
	expect(container).toBeInTheDocument();
});

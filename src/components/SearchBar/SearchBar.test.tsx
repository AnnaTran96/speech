import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

it('should render SearchBar component', () => {
	render(<SearchBar />);
	const container = screen.getByTestId('searchBar-container');
	expect(container).toBeInTheDocument();
});

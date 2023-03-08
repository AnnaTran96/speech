import { render, screen } from '@testing-library/react';

import SearchBar from 'features/components/SearchBar/SearchBar';

it('should render SearchBar component', () => {
   render(<SearchBar toggleSearchBar={false} />);
   const container = screen.getByTestId('searchBar-container');
   expect(container).toBeInTheDocument();
});

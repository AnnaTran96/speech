import { render, screen } from '@testing-library/react';

import SearchBar from 'app/common/components/SearchBar/SearchBar';

it('should render SearchBar component', () => {
   render(<SearchBar toggleSearchBar={false} />);
   const container = screen.getByTestId('searchBar-container');
   expect(container).toBeInTheDocument();
});

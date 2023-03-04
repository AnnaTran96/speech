import { render, screen } from '@testing-library/react';

import Search from 'features/components/Search/Search';

it('should render Search component', () => {
   render(<Search />);
   const container = screen.getByTestId('search-container');
   expect(container).toBeInTheDocument();
});

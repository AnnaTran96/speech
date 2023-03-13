import { render, screen } from '@testing-library/react';

import SearchBar from 'app/common/components/SearchBar/SearchBar';

it('should render SearchBar component', () => {
   render(
      <SearchBar
         toggleSearchBar={false}
         onSubmit={() => console.log('onSubmit')}>
         TEST
      </SearchBar>
   );
   const container = screen.getByTestId('searchBar-container');
   expect(container).toBeInTheDocument();
});

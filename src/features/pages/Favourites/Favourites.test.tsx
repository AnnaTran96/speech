import { render, screen } from '@testing-library/react';

import Favourites from 'features/pages/Favourites/Favourites';

it('should render Favourites component', () => {
   render(<Favourites />);
   const container = screen.getByTestId('favourites-container');
   expect(container).toBeInTheDocument();
});

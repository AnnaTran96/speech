import { render, screen } from '@testing-library/react';

import Navbar from 'app/features/components/Navbar/Navbar';

it('should render Navbar component', () => {
   render(<Navbar />);
   const container = screen.getByTestId('navbar-container');
   expect(container).toBeInTheDocument();
});

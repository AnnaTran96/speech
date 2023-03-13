import { render, screen } from '@testing-library/react';

import About from 'app/features/pages/About/About';

it('should render About component', () => {
   render(<About />);
   const container = screen.getByTestId('about-container');
   expect(container).toBeInTheDocument();
});

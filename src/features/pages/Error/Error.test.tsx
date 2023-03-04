import { render, screen } from '@testing-library/react';

import Error from 'features/pages/Error/Error';

it('should render Error component', () => {
   render(<Error />);
   const container = screen.getByTestId('error-container');
   expect(container).toBeInTheDocument();
});

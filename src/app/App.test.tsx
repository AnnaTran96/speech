import { render, screen } from '@testing-library/react';

import App from 'app/App';

describe('App Component', () => {
   beforeEach(() => {
      render(<App />);
   });

   it('should render App component', () => {
      const container = screen.getByTestId('app-container');
      expect(container).toBeInTheDocument();
      expect(screen.getByText('Speech')).toBeInTheDocument();
   });
});

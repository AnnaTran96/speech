import { render, screen } from '@testing-library/react';

import Settings from 'features/pages/Settings/Settings';

describe('Settings Component', () => {
   beforeEach(() => {
      render(<Settings />);
   });

   it('should render Settings component', () => {
      const container = screen.getByTestId('settings-container');
      expect(container).toBeInTheDocument();
   });
});

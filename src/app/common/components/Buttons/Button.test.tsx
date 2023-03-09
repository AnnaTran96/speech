import { render, screen } from '@testing-library/react';

import Button from 'app/common/components/Buttons/Button';

describe('Button Component', () => {
   beforeEach(() => {
      render(<Button onClick={() => ''}>Test</Button>);
   });

   it('should render Button component', () => {
      const container = screen.getByTestId('button-container');
      expect(container).toBeInTheDocument();
   });
});

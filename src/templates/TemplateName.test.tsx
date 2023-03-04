import { render, screen } from '@testing-library/react';

import TemplateName from 'templates/TemplateName';

describe('TemplateName Component', () => {
   beforeEach(() => {
      render(<TemplateName />);
   });

   it('should render TemplateName component', () => {
      const container = screen.getByTestId('templateName-container');
      expect(container).toBeInTheDocument();
   });
});

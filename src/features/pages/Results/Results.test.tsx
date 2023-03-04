import { render, screen } from '@testing-library/react';
import Results from 'features/pages/Results/Results';

it('should render Results component', () => {
  render(<Results />);
  const container = screen.getByTestId('results-container');
  expect(container).toBeInTheDocument();
});

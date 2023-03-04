import { render, screen } from '@testing-library/react';
import SavedWords from 'features/pages/SavedWords/SavedWords';

it('should render SavedWords component', () => {
  render(<SavedWords />);
  const container = screen.getByTestId('savedWords-container');
  expect(container).toBeInTheDocument();
});

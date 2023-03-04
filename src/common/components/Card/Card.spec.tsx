import { screen } from '@testing-library/react';

it('should render Card component', () => {
   //TODO: add mock
   // render(<Card />);
   const container = screen.getByTestId('Card-container');
   expect(container).toBeInTheDocument();
});

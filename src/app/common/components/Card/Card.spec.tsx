import { screen } from '@testing-library/react';

it('should render Card component', () => {
   //TODO: add mock
   // render(<Card />);
   const container = screen.getByTestId('card-container');
   expect(container).toBeInTheDocument();
});

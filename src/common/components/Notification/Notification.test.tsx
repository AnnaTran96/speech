import { render, screen } from '@testing-library/react';

import Notification from 'common/components/Notification/Notification';

it('should render Notification component', () => {
   render(<Notification />);
   const container = screen.getByTestId('notification-container');
   expect(container).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';

import Modal from 'common/components/Modal/Modal';

it('should render Modal component', () => {
   render(<Modal setIsModalOpen={() => false}>Test</Modal>);
   const container = screen.getByTestId('modal-container');
   expect(container).toBeInTheDocument();
});

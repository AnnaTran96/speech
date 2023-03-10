import { render, screen } from '@testing-library/react';

import Modal from 'app/common/components/Modal/Modal';

it('should render Modal component', () => {
   render(
      <Modal closeModal={() => false} title='Test'>
         Test
      </Modal>
   );
   const container = screen.getByTestId('modal-container');
   expect(container).toBeInTheDocument();
});

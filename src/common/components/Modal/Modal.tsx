import React, { Dispatch } from 'react';

import 'common/components/Modal/Modal.scss';

import Card from '../Card/Card';

interface ModalProps {
   setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
   children: React.ReactNode;
}

const Modal = ({ setIsModalOpen, children }: ModalProps) => {
   const closeModal = () => {
      setIsModalOpen(false);
      document.body.style.overflow = 'scroll';
   };

   return (
      <div className='modal-container'>
         <div className='overlay' onClick={() => setIsModalOpen(false)} />
         <div className='center'>
            <Card
               className='modal-card'
               closeClassName='close-button'
               closeModal={closeModal}>
               {children}
            </Card>
         </div>
      </div>
   );
};

export default Modal;

import React from 'react';

import Card from 'common/components/Card/Card';
import 'common/components/Modal/Modal.scss';

interface ModalProps {
   closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
   children: React.ReactNode;
   title: string;
}

const Modal = ({ closeModal, children, title }: ModalProps) => {
   return (
      <div className='modalContainer'>
         <div className='overlay' onClick={closeModal} />
         <div className='center'>
            <Card
               className='modalCard'
               closeClassName='closeButton'
               closeModal={closeModal}
               title={title}>
               {children}
            </Card>
         </div>
      </div>
   );
};

export default Modal;

import React from 'react';

import { Center, ModalCard, Overlay } from 'app/styles/components/Modal.styled';

interface ModalProps {
   closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
   children: React.ReactNode;
   title: string;
}

const Modal = ({ closeModal, children, title }: ModalProps) => {
   return (
      <div>
         <Overlay onClick={closeModal} />
         <Center>
            <ModalCard closeModal={closeModal} title={title}>
               {children}
            </ModalCard>
         </Center>
      </div>
   );
};

export default Modal;

import { MouseEvent, ReactNode } from 'react';

import { Center, ModalCard, Overlay } from 'app/styles/components/Modal.styled';

interface ModalProps {
   closeModal: (e: MouseEvent<HTMLDivElement>) => void;
   children: ReactNode;
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

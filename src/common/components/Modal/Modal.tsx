import React from 'react';

import Card from 'common/components/Card/Card';
import styles from 'common/components/Modal/Modal.module.scss';

interface ModalProps {
   closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
   children: React.ReactNode;
   title: string;
}

const Modal = ({ closeModal, children, title }: ModalProps) => {
   return (
      <div className={`${styles.modalContainer}`}>
         <div className={`${styles.overlay}`} onClick={closeModal} />
         <div className={`${styles.center}`}>
            <Card
               className={`${styles.modalCard}`}
               closeClassName={`${styles.closeButton}`}
               closeModal={closeModal}
               title={title}>
               {children}
            </Card>
         </div>
      </div>
   );
};

export default Modal;

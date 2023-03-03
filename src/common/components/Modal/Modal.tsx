import React, { Dispatch } from 'react';

import './Modal.scss';

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
        <div className='modal'>
          {children}
          <button className='close-button' onClick={closeModal}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

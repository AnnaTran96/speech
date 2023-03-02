import { Search } from 'app.interfaces';

import './Modal.module.scss';

const Modal = ({ word, phonetics, meanings }: Search) => {
  //TODO: Should populate dropdown for translation

  return <div className='modal container' data-testid='modal-container'></div>;
};

export default Modal;

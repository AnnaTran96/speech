import { Search } from 'app.interfaces';
import Modal from 'common/components/Modal/Modal';

import './Card.scss';

const Card = ({ word, phonetics, meanings }: Search) => {
  return (
    <div className='Card container' data-testid='Card-container'>
      <h1>Searched &apos;{word}&apos;</h1>
      <Modal word={word} phonetics={phonetics} meanings={meanings} />
    </div>
  );
};

export default Card;

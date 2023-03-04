import { Fragment, useState } from 'react';

import 'common/components/Card/Card.scss';
import Modal from 'common/components/Modal/Modal';

import { Search } from 'app.interfaces';
import { transformToUpperCase } from 'utils/utils';

interface CardProps {
   children: React.ReactNode;
   result: Search;
}

const Card = ({ children, result }: CardProps) => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   const openModal = () => {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
   };

   const splitMeanings = () => {
      const meanings = [];

      for (let i = 0; i < result.meanings.length; i++) {
         meanings.push(
            <Fragment key={i}>
               <h3>{transformToUpperCase(result.meanings[i].partOfSpeech)}</h3>
               <p>
                  Definition:
                  {result.meanings[i].definitions[0].definition}
               </p>
               {!!result.meanings[i].synonyms[i] &&
                  result.meanings[i].synonyms.length > 0 && (
                     <p>
                        Synonyms:
                        {result.meanings[i].synonyms.map(
                           (synomym: string, id: number) => (
                              <span key={id}> {synomym} </span>
                           )
                        )}
                     </p>
                  )}
            </Fragment>
         );
      }
      return meanings;
   };

   return (
      <div className='card' data-testid='card-container' onClick={openModal}>
         {children}
         {isModalOpen && (
            <Modal setIsModalOpen={setIsModalOpen}>
               <h1>{transformToUpperCase(result.word)}</h1>
               {splitMeanings()}
               <form>
                  <label htmlFor='languages'>Select Language</label>
                  <select id='languages' name='languages'>
                     <option value='test'>test</option>
                  </select>
               </form>
            </Modal>
         )}
      </div>
   );
};

export default Card;

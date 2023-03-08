import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from 'common/components/Button/Button';
import Card from 'common/components/Card/Card';
import Form from 'common/components/Form/Form';
import Modal from 'common/components/Modal/Modal';

import SearchBar from 'features/components/SearchBar/SearchBar';
import styles from 'features/pages/Results/Results.module.scss';
import { transformToUpperCase } from 'utils/utils';

const Results = () => {
   const { state } = useLocation();
   const { result, status, searchWord } = state;

   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   const openModal = () => {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
   };

   const closeModal = () => {
      setIsModalOpen(false);
      document.body.style.overflow = 'scroll';
   };

   const splitMeanings = () => {
      const meanings = [];

      for (let i = 0; i < result[0].meanings.length; i++) {
         meanings.push(
            <div key={i} className={`${styles.information}`}>
               <h3 className={`${styles.partOfSpeech}`}>
                  {transformToUpperCase(result[0].meanings[i].partOfSpeech)}
               </h3>
               <p>
                  Definition: {result[0].meanings[i].definitions[0].definition}
               </p>
               {!!result[0].meanings[i].synonyms[i] &&
                  result[0].meanings[i].synonyms.length > 0 && (
                     <p>
                        Synonyms:
                        {result[0].meanings[i].synonyms.map(
                           (synomym: string, id: number) => (
                              <span key={id}> {synomym} </span>
                           )
                        )}
                     </p>
                  )}
               <div className={`${styles.breakLine}`}></div>
            </div>
         );
      }
      return meanings;
   };

   return (
      <div
         className={`${styles.results} container`}
         data-testid='results-container'>
         <div className={`${styles.resultsTitleContainer}`}>
            <h1>
               Search result for &apos;{transformToUpperCase(searchWord)}
               &apos;
            </h1>
            <SearchBar toggleSearchBar={true} />
         </div>
         {result && !status ? (
            <Card
               className={`${styles.resultsCard}`}
               title={transformToUpperCase(result[0].word)}>
               {splitMeanings()}
               <Button
                  onClick={openModal}
                  className={`${styles.openModalButton}`}>
                  See More
               </Button>

               {isModalOpen && (
                  <Modal
                     closeModal={closeModal}
                     title={transformToUpperCase(result[0].word)}>
                     {splitMeanings()}
                     <Form title={transformToUpperCase(result[0].word)}></Form>
                  </Modal>
               )}
            </Card>
         ) : (
            <p>Sorry there are no definitions for &apos;{searchWord}&apos;</p>
         )}
      </div>
   );
};

export default Results;

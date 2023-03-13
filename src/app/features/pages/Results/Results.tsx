import { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from 'app/common/components/Buttons/Button';
import Card from 'app/common/components/Card/Card';
import Form from 'app/common/components/Form/Form';
import Modal from 'app/common/components/Modal/Modal';

import { transformToUpperCase } from 'app/utils/utils';

import {
   Breakline,
   Information,
   NoResults,
   ResultsContainer,
} from 'app/styles/pages/Results.styled';

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
            <Fragment key={i}>
               <h3>
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
               <Breakline />
            </Fragment>
         );
      }
      return meanings;
   };

   return (
      <ResultsContainer>
         <h1>
            Search result for &apos;{transformToUpperCase(searchWord)}
            &apos;
         </h1>
         {result && !status ? (
            <Card title={transformToUpperCase(result[0].word)}>
               <Information>{splitMeanings()}</Information>
               <Button onClick={openModal}>See More</Button>

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
            <NoResults>
               Sorry there are no definitions for &apos;{searchWord}&apos;
            </NoResults>
         )}
      </ResultsContainer>
   );
};

export default Results;

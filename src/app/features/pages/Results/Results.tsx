import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from 'app/common/components/Buttons/Button';
import Card from 'app/common/components/Card/Card';
import Form from 'app/common/components/Form/Form';
import Modal from 'app/common/components/Modal/Modal';
import ThemeSwitcher from 'app/common/components/ThemeSwitcher/ThemeSwitcher';
import {
   Breakline,
   Information,
   PartOfSpeech,
   ResultsContainer,
} from 'app/styles/pages/Results.styled';
import { transformToUpperCase } from 'app/utils/utils';

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
            <Information key={i}>
               <PartOfSpeech>
                  {transformToUpperCase(result[0].meanings[i].partOfSpeech)}
               </PartOfSpeech>
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
            </Information>
         );
      }
      return meanings;
   };

   return (
      <ThemeSwitcher>
         <ResultsContainer>
            <h1>
               Search result for &apos;{transformToUpperCase(searchWord)}
               &apos;
            </h1>
            {result && !status ? (
               <Card title={transformToUpperCase(result[0].word)}>
                  {splitMeanings()}
                  <Button onClick={openModal}>See More</Button>

                  {isModalOpen && (
                     <Modal
                        closeModal={closeModal}
                        title={transformToUpperCase(result[0].word)}>
                        {splitMeanings()}
                        <Form
                           title={transformToUpperCase(result[0].word)}></Form>
                     </Modal>
                  )}
               </Card>
            ) : (
               <p>
                  Sorry there are no definitions for &apos;{searchWord}&apos;
               </p>
            )}
         </ResultsContainer>
      </ThemeSwitcher>
   );
};

export default Results;

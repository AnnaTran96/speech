import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import Card from 'common/components/Card/Card';

import 'features/pages/Results/Results.scss';
import { transformToUpperCase } from 'utils/utils';

const Results = () => {
   const { state } = useLocation();
   const { result, status, searchWord } = state;

   const splitMeanings = () => {
      const meanings = [];

      for (let i = 0; i < result[0].meanings.length; i++) {
         meanings.push(
            <Fragment key={i}>
               <h3 className='part-of-speech'>
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
            </Fragment>
         );
      }
      return meanings;
   };

   return (
      <div className='results container' data-testid='results-container'>
         <h1>
            Search results for &apos;{transformToUpperCase(searchWord)}
            &apos;
         </h1>
         {result && !status ? (
            <Card result={result[0]}>
               <h1>{transformToUpperCase(result[0].word)}</h1>
               {splitMeanings()}
            </Card>
         ) : (
            <p>Sorry there are no definitions for &apos;{searchWord}&apos;</p>
         )}
      </div>
   );
};

export default Results;

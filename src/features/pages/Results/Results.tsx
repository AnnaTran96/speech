import { useLocation } from 'react-router-dom';

import { Search } from '../../../app.interfaces';
import Card from '../../../common/components/Card/Card';
import './Results.module.scss';

const Results = () => {
  const { state } = useLocation();
  const { result, status, word } = state;

  return (
    <div className='results container' data-testid='results-container'>
      {result && !status ? (
        result.map((searchedWord: Search, id: number) => (
          <Card
            key={id}
            word={searchedWord.word}
            phonetics={searchedWord.phonetics}
            meanings={searchedWord.meanings}
          />
        ))
      ) : (
        <>
          <h1>Searched: &apos;{word}&apos;</h1>
          <p>Sorry there are no definitions for &apos;{word}&apos;</p>
        </>
      )}
    </div>
  );
};

export default Results;

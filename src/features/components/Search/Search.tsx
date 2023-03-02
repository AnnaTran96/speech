import { SearchErrorResponse, Search as SearchResponse } from 'app.interfaces';
import { searchApi } from 'app/services/Search.service';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Search.scss';

const Search = () => {
  const navigate = useNavigate();

  const [searchWord, setSearchWord] = useState('');
  const [trigger] = searchApi.endpoints.getSearchWord.useLazyQuery();

  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearchWord(e.currentTarget.value);
      if (searchWord.length > 0) {
        trigger(searchWord)
          .unwrap()
          .then((result: SearchResponse[]) => {
            if (result) {
              navigate('/results', { state: { result } });
            }
          })
          .catch((error: SearchErrorResponse) => {
            if (error.status === 404) {
              navigate('/results', {
                state: { status: error.status, word: searchWord },
              });
            } else {
              navigate('/error');
            }
          });
      }
      setSearchWord('');
    },
    [searchWord]
  );

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(target.value);
  };

  return (
    <div className='search' data-testid='search'>
      <div className='search-form'>
        <form onSubmit={handleSubmit}>
          <div className='search-field-row'>
            <div className='search-field-inner-row'>
              <input
                type='text'
                name='search'
                className='search-field'
                placeholder='Search'
                value={searchWord}
                onChange={handleOnChange}
              />
              <div className='search-field-background'></div>
              <div className='search-field-background-overlay'></div>
            </div>
            <div className='search-button-container'>
              <button type='submit' className='search-button'>
                <SearchIcon width={35} height={35} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;

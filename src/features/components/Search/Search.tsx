import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchApi } from 'store/services/Search.service';

import { SearchErrorResponse, Search as SearchResponse } from 'app.interfaces';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import 'features/components/Search/Search.scss';

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
                     navigate('/results', {
                        state: { result, searchWord },
                     });
                  }
               })
               .catch((error: SearchErrorResponse) => {
                  if (error.status === 404) {
                     navigate('/results', {
                        state: { status: error.status, searchWord },
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
         <div className='searchForm'>
            <form onSubmit={handleSubmit}>
               <div className='searchFieldRow'>
                  <div className='searchFieldInnerRow'>
                     <input
                        type='text'
                        name='search'
                        className='searchField'
                        placeholder='Search'
                        value={searchWord}
                        onChange={handleOnChange}
                        autoComplete='off'
                     />
                     <div className='searchFieldBackground'></div>
                     <div className='searchFieldBackgroundOverlay'></div>
                  </div>
                  <button type='submit' className='searchButton'>
                     <SearchIcon className='searchIcon' />
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Search;

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchApi } from 'store/services/Search.service';

import { SearchErrorResponse, Search as SearchResponse } from 'app.interfaces';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import styles from 'features/components/SearchBar/SearchBar.module.scss';

interface SearchBarProps {
   toggleSearchBar: boolean;
}

const SearchBar = ({ toggleSearchBar }: SearchBarProps) => {
   const navigate = useNavigate();

   const [searchWord, setSearchWord] = useState<string>('');
   const [trigger] = searchApi.endpoints.getSearchWord.useLazyQuery();
   const ref = useRef<any>(null);

   useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         if (ref.current && !ref.current.contains(e.target)) {
            setSearchWord('');
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
   }, [ref]);

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

   const searchForm = (
      containerName: string,
      inputName: string,
      collapse: boolean
   ) => {
      return (
         <div className={`${containerName}`} data-testid='searchBar-container'>
            <form onSubmit={handleSubmit} className={`${styles.searchBarForm}`}>
               <input
                  type='search'
                  className={`${inputName}`}
                  placeholder='Search'
                  value={searchWord}
                  onChange={handleOnChange}
                  autoComplete='off'
                  ref={ref}
               />
               {collapse ? null : (
                  <button type='submit' className={`${styles.searchButton}`}>
                     <SearchIcon className={`${styles.searchIcon}`} />
                  </button>
               )}
            </form>
         </div>
      );
   };

   return (
      <>
         {toggleSearchBar ? (
            <>
               {searchForm(
                  `${styles.toggleContainer}`,
                  `${styles.collapseSearchField}`,
                  true
               )}
            </>
         ) : (
            <>
               {searchForm(
                  `${styles.searchBarContainer}`,
                  `${styles.searchField}`,
                  false
               )}
            </>
         )}
      </>
   );
};

export default SearchBar;

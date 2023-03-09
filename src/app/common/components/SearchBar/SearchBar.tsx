import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
   SearchErrorResponse,
   Search as SearchResponse,
} from 'app/app.interfaces';
import { searchApi } from 'app/store/services/Search.service';
import {
   CollapseSearchField,
   SearchBarForm,
   SearchButton,
   SearchField,
   SearchIcon,
   ToggleContainer,
} from 'app/styles/components/SearchBar.styles';
import { SearchContainer } from 'app/styles/pages/Search.styles';
import { clickOutside } from 'app/utils/utils';

interface SearchBarProps {
   toggleSearchBar: boolean;
}

const SearchBar = ({ toggleSearchBar }: SearchBarProps) => {
   const navigate = useNavigate();

   const [searchWord, setSearchWord] = useState<string>('');
   const [trigger] = searchApi.endpoints.getSearchWord.useLazyQuery();
   const ref = useRef<HTMLInputElement>(null);

   clickOutside(ref, () => {
      setSearchWord('');
   });

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
      <>
         {toggleSearchBar ? (
            <ToggleContainer>
               <SearchBarForm onSubmit={handleSubmit}>
                  <CollapseSearchField
                     type='search'
                     placeholder='Search'
                     value={searchWord}
                     onChange={handleOnChange}
                     autoComplete='off'
                     ref={ref}
                  />
               </SearchBarForm>
            </ToggleContainer>
         ) : (
            <SearchContainer>
               <SearchBarForm onSubmit={handleSubmit}>
                  <SearchField
                     type='search'
                     placeholder='Search'
                     value={searchWord}
                     onChange={handleOnChange}
                     autoComplete='off'
                     ref={ref}
                  />
                  <SearchButton type='submit'>
                     <SearchIcon />
                  </SearchButton>
               </SearchBarForm>
            </SearchContainer>
         )}
      </>
   );
};

export default SearchBar;

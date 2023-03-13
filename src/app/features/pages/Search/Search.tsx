import { ChangeEvent, MouseEvent, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchApi } from 'app/store/services/Search.service';

import SearchBar from 'app/common/components/SearchBar/SearchBar';

import { clickOutside } from 'app/utils/utils';

import { InputField, SearchContainer } from 'app/styles/pages/Search.styled';

import {
   SearchErrorResponse,
   Search as SearchResponse,
} from 'app/app.interfaces';

const Search = () => {
   const navigate = useNavigate();
   const ref = useRef<HTMLInputElement>(null);
   const [searchWord, setSearchWord] = useState<string>('');
   const [trigger] = searchApi.endpoints.getSearchWord.useLazyQuery();

   clickOutside(ref, () => {
      setSearchWord('');
   });

   const handleSubmit = useCallback(
      (e: MouseEvent<HTMLFormElement>) => {
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

   const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setSearchWord(target.value);
   };

   return (
      <SearchContainer>
         <SearchBar toggleSearchBar={false} onSubmit={handleSubmit}>
            <InputField
               type='search'
               placeholder='Search'
               value={searchWord}
               onChange={handleOnChange}
               autoComplete='off'
               ref={ref}
            />
         </SearchBar>
      </SearchContainer>
   );
};

export default Search;

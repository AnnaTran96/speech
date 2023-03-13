import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
   SearchErrorResponse,
   Search as SearchResponse,
} from 'app/app.interfaces';
import SearchBar from 'app/common/components/SearchBar/SearchBar';
import { searchApi } from 'app/store/services/Search.service';
import { InputField, SearchContainer } from 'app/styles/pages/Search.styled';
import { clickOutside } from 'app/utils/utils';

const Search = () => {
   const navigate = useNavigate();
   const [trigger] = searchApi.endpoints.getSearchWord.useLazyQuery();

   const [searchWord, setSearchWord] = useState<string>('');
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

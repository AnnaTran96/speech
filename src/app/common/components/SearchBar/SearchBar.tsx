import { MouseEvent, ReactNode } from 'react';

import {
   SearchBarForm,
   SearchButton,
   SearchIcon,
   ToggleContainer,
} from 'app/styles/components/SearchBar.styled';
import { SearchContainer } from 'app/styles/pages/Search.styled';

interface SearchBarProps {
   toggleSearchBar: boolean;
   className?: string;
   children: ReactNode;
   onSubmit: (e: MouseEvent<HTMLFormElement>) => void;
}

const SearchBar = ({
   toggleSearchBar,
   className,
   children,
   onSubmit,
}: SearchBarProps) => {
   return (
      <>
         {toggleSearchBar ? (
            <ToggleContainer className={className}>
               <SearchBarForm onSubmit={onSubmit}>{children}</SearchBarForm>
            </ToggleContainer>
         ) : (
            <SearchContainer>
               <SearchBarForm onSubmit={onSubmit}>
                  {children}
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

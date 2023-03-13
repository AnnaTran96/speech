import { MouseEvent, ReactNode } from 'react';

import ThemeSwitcher from 'app/common/components/ThemeSwitcher/ThemeSwitcher';

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
      <ThemeSwitcher>
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
      </ThemeSwitcher>
   );
};

export default SearchBar;

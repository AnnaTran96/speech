import SearchBar from 'app/common/components/SearchBar/SearchBar';
import { SearchContainer } from 'app/styles/pages/Search.styled';

const Search = () => (
   <SearchContainer>
      <SearchBar toggleSearchBar={false} />
   </SearchContainer>
);

export default Search;

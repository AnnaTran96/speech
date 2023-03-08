import SearchBar from 'features/components/SearchBar/SearchBar';
import styles from 'features/pages/Search/Search.module.scss';

const Search = () => (
   <div className={`${styles.search} container`} data-testid='search-container'>
      <SearchBar toggleSearchBar={false} />
   </div>
);

export default Search;

import {
   ChangeEvent,
   MouseEvent,
   useCallback,
   useContext,
   useEffect,
   useRef,
   useState,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { searchApi } from 'app/store/services/Search.service';

import FavouriteButton from 'app/common/components/Buttons/FavouriteButton/FavouriteButton';
import SearchBar from 'app/common/components/SearchBar/SearchBar';

import Logo from 'app/features/components/Logo/Logo';

import { clickOutside } from 'app/utils/utils';

import {
   blueTheme,
   darkTheme,
   defaultTheme,
   greenTheme,
   purpleTheme,
   rainbowTheme,
   yellowTheme,
} from 'app/styles/Theme.styled';
import {
   FirstSection,
   InputField,
   LanguageDropdown,
   NavbarContainer,
   NavbarLinksSetOne,
   NavbarLinksSetTwo,
   ServicesDropdown,
   ThemeDropdown,
} from 'app/styles/components/Navbar.styled';

import {
   Option,
   SearchErrorResponse,
   Search as SearchResponse,
} from 'app/app.interfaces';
import { GlobalContext } from 'app/context/globalContext';

const Navbar = () => {
   const navigate = useNavigate();
   const ref = useRef<HTMLInputElement>(null);
   const [searchWord, setSearchWord] = useState<string>('');
   const { theme, themeSwitchHandler } = useContext(GlobalContext);
   const [trigger] = searchApi.endpoints.getSearchWord.useLazyQuery();

   clickOutside(ref, () => {
      setSearchWord('');
   });

   useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(theme));
   }, [theme]);

   const servicesOptions: Option[] = [
      { label: 'Dictionary', value: 'dictionary' },
      { label: 'Translate', value: 'translate' },
   ];

   const handleServicesOptions = (option: Option) => {
      if (option.value === 'dictionary') {
         navigate('/search');
      } else {
         navigate('/translate');
      }
   };

   const themeOptions: Option[] = [
      { label: 'Default', value: 'defaultTheme', icon: '🦄' },
      { label: 'Blue', value: 'blueTheme', icon: '🐋' },
      { label: 'Dark', value: 'darkTheme', icon: '🌑' },
      { label: 'Green', value: 'greenTheme', icon: '☘️' },
      { label: 'Purple', value: 'purpleTheme', icon: '🍇' },
      { label: 'Rainbow', value: 'rainbowTheme', icon: '🌈' },
      { label: 'Yellow', value: 'yellowTheme', icon: '🍋' },
   ];

   const handleThemeOptions = (option: Option) => {
      switch (option.value) {
         case 'defaultTheme':
            themeSwitchHandler(defaultTheme);
            break;
         case 'blueTheme':
            themeSwitchHandler(blueTheme);
            break;
         case 'darkTheme':
            themeSwitchHandler(darkTheme);
            break;
         case 'greenTheme':
            themeSwitchHandler(greenTheme);
            break;
         case 'purpleTheme':
            themeSwitchHandler(purpleTheme);
            break;
         case 'rainbowTheme':
            themeSwitchHandler(rainbowTheme);
            break;
         case 'yellowTheme':
            themeSwitchHandler(yellowTheme);
            break;
         default:
            themeSwitchHandler(defaultTheme);
      }
   };

   const languageOptions: Option[] = [
      { value: 'zh', label: 'Chinese', icon: '🇨🇳' },
      { value: 'en', label: 'English', icon: '🇬🇧' },
      { value: 'fr', label: 'French', icon: '🇫🇷' },
      { value: 'de', label: 'German', icon: '🇩🇪' },
      { value: 'it', label: 'Italian', icon: '🇮🇹' },
      { value: 'jr', label: 'Japanese', icon: '🇯🇵' },
      { value: 'ko', label: 'Korean', icon: '🇰🇷' },
      { value: 'pt', label: 'Portugese', icon: '🇵🇹' },
      { value: 'es', label: 'Spanish', icon: '🇪🇸' },
   ];

   const handleLanguageOptions = (option: Option) => {
      // TODO: To implement functionality
   };

   const handleSearchSubmit = useCallback(
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

   const handleSearchOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setSearchWord(target.value);
   };

   return (
      <NavbarContainer>
         <FirstSection>
            <Logo />
            <NavbarLinksSetOne>
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <ServicesDropdown
                  title='Services'
                  options={servicesOptions}
                  onSelect={handleServicesOptions}
               />
            </NavbarLinksSetOne>
         </FirstSection>
         <NavbarLinksSetTwo>
            <SearchBar toggleSearchBar={true} onSubmit={handleSearchSubmit}>
               <InputField
                  type='search'
                  placeholder='Search'
                  value={searchWord}
                  onChange={handleSearchOnChange}
                  autoComplete='off'
                  ref={ref}
               />
            </SearchBar>
            <FavouriteButton showFavouriteText={false} />
            <ThemeDropdown
               title='Themes'
               options={themeOptions}
               onSelect={handleThemeOptions}
            />
            <LanguageDropdown
               title='EN'
               options={languageOptions}
               onSelect={handleLanguageOptions}
            />
         </NavbarLinksSetTwo>
      </NavbarContainer>
   );
};

export default Navbar;

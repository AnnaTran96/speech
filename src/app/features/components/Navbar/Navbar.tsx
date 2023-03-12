import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Option } from 'app/app.interfaces';
import FavouriteButton from 'app/common/components/Buttons/FavouriteButton/FavouriteButton';
import SearchBar from 'app/common/components/SearchBar/SearchBar';
import ThemeSwitcher from 'app/common/components/ThemeSwitcher/ThemeSwitcher';
import { GlobalContext } from 'app/context/globalContext';
import Logo from 'app/features/components/Logo/Logo';
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
   LanguageDropdown,
   NavbarContainer,
   NavbarLinksSetOne,
   NavbarLinksSetTwo,
   ServicesDropdown,
   ThemeDropdown,
} from 'app/styles/components/Navbar.styled';

const Navbar = () => {
   const navigate = useNavigate();
   const { theme, themeSwitchHandler } = useContext(GlobalContext);

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

   return (
      <ThemeSwitcher>
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
               <SearchBar toggleSearchBar={true} />
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
      </ThemeSwitcher>
   );
};

export default Navbar;

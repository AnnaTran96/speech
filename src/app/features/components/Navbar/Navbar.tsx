import { Link, useNavigate } from 'react-router-dom';

import { Option } from 'app/app.interfaces';
import Logo from 'app/features/components/Logo/Logo';
import {
   FirstSection,
   LanguageDropdown,
   NavbarContainer,
   NavbarLinksSetOne,
   NavbarLinksSetTwo,
   ServicesDropdown,
   ThemeDropdown,
} from 'app/styles/components/Navbar.styles';

const Navbar = () => {
   const navigate = useNavigate();

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
      { label: 'Original', value: 'original', icon: '🦄' },
      { label: 'Blue', value: 'blue', icon: '🐋' },
      { label: 'Dark', value: 'dark', icon: '🌑' },
      { label: 'Green', value: 'green', icon: '☘️' },
      { label: 'Rainbow', value: 'rainbow', icon: '🌈' },
   ];

   const handleThemeOptions = (option: Option) => {
      // TODO: To implement functionality
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

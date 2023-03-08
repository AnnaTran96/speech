import { Link, useNavigate } from 'react-router-dom';

import Dropdown from 'common/components/Dropdown/Dropdown';

import { Option } from 'app.interfaces';
import Logo from 'features/components/Logo/Logo';
import styles from 'features/components/Navbar/Navbar.module.scss';

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
      { value: 'ar', label: 'Arabic', icon: '🇦🇪' },
      { value: 'zh', label: 'Chinese', icon: '🇨🇳' },
      { value: 'en', label: 'English', icon: '🇬🇧' },
      { value: 'fr', label: 'French', icon: '🇫🇷' },
      { value: 'de', label: 'German', icon: '🇩🇪' },
      { value: 'it', label: 'Italian', icon: '🇮🇹' },
      { value: 'jr', label: 'Japanese', icon: '🇯🇵' },
      { value: 'ko', label: 'Korean', icon: '🇰🇷' },
      { value: 'pt', label: 'Portugese', icon: '🇵🇹' },
      { value: 'es', label: 'Spanish', icon: '🇪🇸' },
      { value: 'tr', label: 'Turkish', icon: '🇹🇷' },
   ];

   const handleLanguageOptions = (option: Option) => {
      // TODO: To implement functionality
   };

   return (
      <div className={`${styles.navbar}`} data-testid='navbar-container'>
         <div className={`${styles.firstSection}`}>
            <Logo />
            <nav className={`${styles.navbarLinksSetOne}`}>
               <Link to='/'>Home</Link>
               <Link to='/about'>About</Link>
               <Dropdown
                  title='Services'
                  options={servicesOptions}
                  onSelect={handleServicesOptions}
               />
            </nav>
         </div>

         <nav className={`${styles.navbarLinksSetTwo}`}>
            <Dropdown
               title='Themes'
               options={themeOptions}
               onSelect={handleThemeOptions}
               className={`${styles.themeDropdown}`}
            />
            <Dropdown
               title='EN'
               options={languageOptions}
               onSelect={handleLanguageOptions}
               className={`${styles.languageDropdown}`}
               optionClassName={`${styles.languageOption}`}
            />
         </nav>
      </div>
   );
};

export default Navbar;

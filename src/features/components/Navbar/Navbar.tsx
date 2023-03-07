import { Link, useNavigate } from 'react-router-dom';

import Dropdown from 'common/components/Dropdown/Dropdown';

import { Option } from 'app.interfaces';
import Logo from 'features/components/Logo/Logo';
import 'features/components/Navbar/Navbar.scss';

const Navbar = () => {
   const navigate = useNavigate();

   const options: Option[] = [
      { label: 'Dictionary', value: 'dictionary' },
      { label: 'Translate', value: 'translate' },
   ];
   const handleSelectOption = (option: Option) => {
      if (option.value === 'dictionary') {
         navigate('/search');
      } else {
         navigate('/translate');
      }
   };

   return (
      <div className='navbar' data-testid='navbar-container'>
         <Logo />
         <nav className='navbarLinks'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Dropdown
               title='Services'
               options={options}
               onSelect={handleSelectOption}
            />
         </nav>
      </div>
   );
};

export default Navbar;

import { useNavigate } from 'react-router-dom';

import Button from 'common/components/Button/Button';

import Logo from 'features/components/Logo/Logo';
import 'features/components/Navbar/Navbar.scss';
import Search from 'features/components/Search/Search';

const Navbar = () => {
   const navigate = useNavigate();

   return (
      <div className='navbar' data-testid='navbar-container'>
         <div className='logoSearchbarRow'>
            <div className='navbarLogo'>
               <Logo />
            </div>
            <nav className='navbarLinks'>
               <Button className='link' onClick={() => navigate('/about')}>
                  About
               </Button>
               <Button className='link' onClick={() => navigate('/favourites')}>
                  Favourites
               </Button>
               <Button className='link' onClick={() => navigate('/settings')}>
                  Settings
               </Button>
            </nav>
         </div>
         <div className='navbarSearchbar'>
            <Search />
         </div>
      </div>
   );
};

export default Navbar;

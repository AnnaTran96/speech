import Button from 'common/components/Button/Button';
import Logo from 'features/components/Logo/Logo';
import Search from 'features/components/Search/Search';

import { useNavigate } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar' data-testid='navbar-container'>
      <div className='logo-searchbar-row'>
        <div className='navbar-logo'>
          <Logo />
        </div>
        <nav className='navbar-links'>
          <Button className='link' onClick={() => navigate('/about')}>
            About
          </Button>
          <Button className='link' onClick={() => navigate('/saved-words')}>
            Saved Words
          </Button>
          <Button className='link' onClick={() => navigate('/settings')}>
            Settings
          </Button>
        </nav>
      </div>
      <div className='navbar-searchbar'>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;

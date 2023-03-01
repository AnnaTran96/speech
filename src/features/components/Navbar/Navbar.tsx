import { useNavigate } from 'react-router-dom';

import Button from '../../../common/components/Button/Button';
import Logo from '../Logo/Logo';
import SearchBar from '../Search/Search';
import './Navbar.scss';

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div className='navbar' data-testid='navbar-container'>
			<div className='logo-searchbar-row'>
				<div className='navbar-logo'>
					<Logo />
				</div>
				<div className='navbar-links'>
					<Button className='link' onClick={() => navigate('/about')}>
						About
					</Button>
					<Button className='link' onClick={() => navigate('/saved-words')}>
						Saved Words
					</Button>
					<Button className='link' onClick={() => navigate('/settings')}>
						Settings
					</Button>
				</div>
			</div>
			<div className='navbar-searchbar'>
				<SearchBar />
			</div>
		</div>
	);
};

export default Navbar;

import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.scss';

const Navbar = () => {
	const navigate = useNavigate();

	const redirectToAbout = () => navigate('/about');
	const redirectToSavedWords = () => navigate('/saved-words');
	const redirectToSettings = () => navigate('/settings');

	return (
		<div className='navbar' data-testid='navbar-container'>
			<div className='logo-searchbar-row'>
				<div className='navbar-logo'>
					<Logo />
				</div>
				<div className='navbar-searchbar'>
					<SearchBar />
				</div>
			</div>
			<div>
				<div>
					<div className='navbar-links'>
						<Button className='link' onClick={redirectToAbout}>
							About
						</Button>
						<Button className='link' onClick={redirectToSavedWords}>
							Saved Words
						</Button>
						<Button className='link' onClick={redirectToSettings}>
							Settings
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

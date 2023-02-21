import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.scss';

const Navbar = () => (
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
				<ul className='navbar-links'>
					<li>
						<a href='/about'>About</a>
					</li>
					<li>
						<a href='/saved-words'>Saved Words</a>
					</li>
					<li>
						<a href='/settings'>Settings</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Navbar;

import Logo from '../Logo/Logo';
import './Navbar.module.scss';

const Navbar = () => (
	<div className='navbar' data-testid='navbar-container'>
		<Logo />
	</div>
);

export default Navbar;

import { useNavigate } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
	const navigate = useNavigate();

	const redirectToHome = () => {
		navigate('/');
	};

	return (
		<div className='logo container' data-testid='logo-container'>
			<div className='logo-shape'>
				<span className='circle'></span>
				<div className='sound-curves'>
					<span className='sound-curve'></span>
					<span className='sound-curve'></span>
					<span className='sound-curve'></span>
				</div>
			</div>
			<button className='logo-name' onClick={redirectToHome}>
				Speech
			</button>
		</div>
	);
};

export default Logo;

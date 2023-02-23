import './Logo.scss';

const Logo = () => (
	<div className='logo container' data-testid='logo-container'>
		<div className='logo-shape'>
			<span className='circle'></span>
			<div className='sound-curves'>
				<span className='sound-curve'></span>
				<span className='sound-curve'></span>
				<span className='sound-curve'></span>
			</div>
		</div>
		<span className='logo-name'>Speech</span>
	</div>
);

export default Logo;

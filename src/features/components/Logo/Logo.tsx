import { useNavigate } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className='logo' data-testid='logo-container'>
      <div className='logo-shape'>
        <span className='circle'>
          <div className='sound-curves'>
            <span className='sound-curve'></span>
            <span className='sound-curve'></span>
            <span className='sound-curve'></span>
          </div>
        </span>
      </div>
      <button className='logo-name' onClick={() => navigate('/')}>
        Speech
      </button>
    </div>
  );
};

export default Logo;

import Button from 'common/components/Button/Button';

import { useNavigate } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // get ref from searchbar
    navigate('/about');
  };

  return (
    <div className='home container' data-testid='home-container'>
      <Button className='more-info-btn' onClick={handleGetStarted}>
        More Info
      </Button>
    </div>
  );
};

export default Home;

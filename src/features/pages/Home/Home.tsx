import { useNavigate } from 'react-router-dom';

import Button from 'common/components/Button/Button';
import Card from 'common/components/Card/Card';

import 'features/pages/Home/Home.scss';

const Home = () => {
   const navigate = useNavigate();

   return (
      <div className='home container' data-testid='home-container'>
         <Card className='homeCard'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem dolorum deserunt expedita totam vitae amet temporibus
            tenetur corporis blanditiis corrupti quae consequuntur praesentium
            dicta commodi, neque molestias magnam quo voluptatem. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Exercitationem dolorum
            deserunt expedita totam vitae amet temporibus tenetur corporis
            blanditiis corrupti quae consequuntur praesentium dicta commodi,
            neque molestias magnam quo voluptatem. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Exercitationem dolorum deserunt
         </Card>
         <Button className='getStartButton' onClick={() => navigate('/about')}>
            Get Started
         </Button>
      </div>
   );
};

export default Home;

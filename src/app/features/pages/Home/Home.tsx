import { useNavigate } from 'react-router-dom';

import { Container } from 'app/styles/App.styles';
import {
   BackgroundAlienIcon,
   BackgroundLollipopIcon,
   DogContainer,
   HomeButton,
   HomeCard,
   HomeCardContainer,
   HomeContainer,
} from 'app/styles/pages/Home.styles';

const Home = () => {
   const navigate = useNavigate();

   return (
      <Container>
         <HomeContainer data-testid='home-container'>
            <DogContainer />
            <HomeCardContainer>
               <HomeCard>
                  <h1>All in one dictionary & translation service</h1>
                  <p>
                     It is the first service to include both a dictionary and
                     translation model.
                  </p>
                  <p>
                     You can learn, listen and save the words for the future!
                  </p>
               </HomeCard>
               <div>
                  <HomeButton onClick={() => navigate('/about')}>
                     Get Started
                  </HomeButton>
               </div>
            </HomeCardContainer>
            <BackgroundAlienIcon />
            <BackgroundLollipopIcon />
         </HomeContainer>
      </Container>
   );
};

export default Home;

import { useNavigate } from 'react-router-dom';

import {
   BackgroundAlienIcon,
   BackgroundGameIcon,
   DogContainer,
   HomeButton,
   HomeCard,
   HomeCardContainer,
   HomeContainer,
} from 'app/styles/pages/Home.styled';

const Home = () => {
   const navigate = useNavigate();

   return (
      <HomeContainer data-testid='home-container'>
         <DogContainer />
         <HomeCardContainer>
            <HomeCard>
               <h1>All in one dictionary & translation service</h1>
               <p>
                  It is the first service to include both a dictionary and
                  translation model.
               </p>
               <p>You can learn, listen and favourite specific words!</p>
            </HomeCard>
            <div>
               <HomeButton onClick={() => navigate('/about')}>
                  Get Started
               </HomeButton>
            </div>
         </HomeCardContainer>
         <BackgroundAlienIcon />
         <BackgroundGameIcon />
      </HomeContainer>
   );
};

export default Home;

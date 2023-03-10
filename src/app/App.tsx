import ThemeSwitcher from './common/components/ThemeSwitcher/ThemeSwitcher';
import {
   BackgroundHighVoltageIcon,
   BackgroundRainbowIcon,
   BackgroundStarIcon,
   Container,
   GridBackground,
} from './styles/App.styled';

const App = () => (
   <div className='app' data-testid='app-container'>
      <ThemeSwitcher>
         <Container className='app' data-testid='app-container'>
            <GridBackground />
            <GridBackground />
            <BackgroundRainbowIcon />
            <BackgroundStarIcon />
            <BackgroundHighVoltageIcon />
         </Container>
      </ThemeSwitcher>
   </div>
);

export default App;

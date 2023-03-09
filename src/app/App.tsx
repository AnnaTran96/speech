import {
   BackgroundHighVoltageIcon,
   BackgroundRainbowIcon,
   BackgroundStarIcon,
   Container,
   GridBackground,
} from './styles/App.styles';

const App = () => (
   <div className='app' data-testid='app-container'>
      <Container className='app' data-testid='app-container'>
         <GridBackground />
         <GridBackground />
         <BackgroundRainbowIcon />
         <BackgroundStarIcon />
         <BackgroundHighVoltageIcon />
      </Container>
   </div>
);

export default App;

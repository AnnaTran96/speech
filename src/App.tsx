import 'App.scss';

import { ReactComponent as StarIcon } from 'assets/icons/glowing-star.svg';
import { ReactComponent as HighVoltageIcon } from 'assets/icons/high-voltage.svg';
import { ReactComponent as RainbowIcon } from 'assets/icons/rainbow.svg';

const App = () => (
   <div className='app' data-testid='app-container'>
      <span className='grid-background'></span>
      <span className='grid-background'></span>
      <RainbowIcon className='rainbowIcon icon' />
      <StarIcon className='starIcon icon' />
      <HighVoltageIcon className='highVoltageIcon icon' />
   </div>
);

export default App;

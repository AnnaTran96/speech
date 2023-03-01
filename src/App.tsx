import './App.scss';
import { Home } from './features/pages';

const App = () => (
	<div className='app' data-testid='app-container'>
		<span className='grid-background'></span>
		<span className='grid-background'></span>
		<Home />
	</div>
);

export default App;

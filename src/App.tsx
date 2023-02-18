import './App.scss';
import { Home } from './pages';

const App = () => (
	<div className='app-container' data-testid='app-container'>
		<h1 data-testid='app-heading'>Speech</h1>
		<Home />
	</div>
);

export default App;

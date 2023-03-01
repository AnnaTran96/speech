import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { About, Error, Results, SavedWords } from '../src/pages/index';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Settings from './pages/Settings/Settings';
import store from './store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const NavbarWrapper = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <NavbarWrapper />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/results',
				element: <Results />,
			},
			{
				path: '/saved-words',
				element: <SavedWords />,
			},
			{
				path: '/settings',
				element: <Settings />,
			},
		],
		errorElement: <Error />,
	},
]);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

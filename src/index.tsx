import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import store from './app/store';
import Navbar from './features/components/Navbar/Navbar';
import Settings from './features/pages/Settings/Settings';
import { About, Error, Results, SavedWords } from './features/pages/index';

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
				element: <Results />, // TODO: add params
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

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { About, Error, Results, SavedWords } from '../src/pages/index';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
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
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

import App from 'App';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { store } from 'store/store';

import Navbar from 'features/components/Navbar/Navbar';
import { About, Error, Favourites, Home, Results } from 'features/pages/index';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

const NavbarWrapper = () => {
   return (
      <>
         <Navbar />
         <App />
         <Outlet />
      </>
   );
};

const router = createBrowserRouter([
   {
      path: '/',
      element: <NavbarWrapper />,
      children: [
         {
            path: '/',
            element: <Home />,
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
            path: '/favourites',
            element: <Favourites />,
         },
         {
            path: '/search',
         },
         {
            path: '/translate',
         },
         {
            path: '/error',
            element: <Error />,
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

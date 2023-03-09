import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from 'app/App';
import Navbar from 'app/features/components/Navbar/Navbar';
import {
   About,
   Error,
   Favourites,
   Home,
   Results,
   Search,
} from 'app/features/pages/index';
import { store } from 'app/store/store';
import { GlobalStyles } from 'app/styles/Global';
import { NavbarWrapper as NavbarWrapperStyle } from 'app/styles/Index.styles';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

const NavbarWrapper = () => {
   return (
      <NavbarWrapperStyle>
         <GlobalStyles />
         <Navbar />
         <App />
         <Outlet />
      </NavbarWrapperStyle>
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
            element: <Results />,
         },
         {
            path: '/favourites',
            element: <Favourites />,
         },
         {
            path: '/search',
            element: <Search />,
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

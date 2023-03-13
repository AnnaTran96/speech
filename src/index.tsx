import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { store } from 'app/store/store';

import ThemeSwitcher from 'app/common/components/ThemeSwitcher/ThemeSwitcher';

import Navbar from 'app/features/components/Navbar/Navbar';
import {
   About,
   Error,
   Favourites,
   Home,
   Results,
   Search,
} from 'app/features/pages/index';

import { NavbarWrapper as NavbarWrapperStyle } from 'app/styles/index.styled';

import App from 'app/App';
import GlobalContextProvider from 'app/context/globalContext';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

const NavbarWrapper = () => {
   return (
      <GlobalContextProvider>
         <ThemeSwitcher>
            <NavbarWrapperStyle>
               <Navbar />
               <App />
               <Outlet />
            </NavbarWrapperStyle>
         </ThemeSwitcher>
      </GlobalContextProvider>
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

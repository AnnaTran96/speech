import React, { PropsWithChildren, useState } from 'react';

import { DefaultTheme, useTheme } from 'styled-components/macro';

import { defaultTheme } from 'app/styles/Theme.styled';

interface GlobalContextType {
   theme: DefaultTheme;
   themeSwitchHandler: (e: DefaultTheme) => void;
}

export const GlobalContext = React.createContext<GlobalContextType>({
   theme: defaultTheme,
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   themeSwitchHandler: (e: DefaultTheme) => {},
});

const GlobalContextProvider = (props: PropsWithChildren) => {
   const theme = useTheme();

   const [currentTheme, setCurrentTheme] = useState(() => {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme !== null ? JSON.parse(storedTheme) : theme;
   });

   const themeSwitchHandler = (themeType: DefaultTheme) => {
      setCurrentTheme(themeType);
   };

   return (
      <GlobalContext.Provider
         value={{
            theme: currentTheme,
            themeSwitchHandler: themeSwitchHandler,
         }}>
         {props.children}
      </GlobalContext.Provider>
   );
};

export default GlobalContextProvider;

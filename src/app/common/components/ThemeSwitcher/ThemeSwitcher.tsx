import { useContext } from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalContext } from 'app/context/globalContext';
import { GlobalStyles } from 'app/styles/Global.styled';
import {
   blueTheme,
   darkTheme,
   defaultTheme,
   greenTheme,
   orangeTheme,
   rainbowTheme,
   redTheme,
} from 'app/styles/Theme.styled';

const ThemeSwitcher = ({ children }: any) => {
   const currentTheme = useContext(GlobalContext);

   let theme;
   switch (currentTheme.theme.name) {
      case 'defaultTheme':
         theme = defaultTheme;
         break;
      case 'darkTheme':
         theme = darkTheme;
         break;
      case 'blueTheme':
         theme = blueTheme;
         break;
      case 'orangeTheme':
         theme = orangeTheme;
         break;
      case 'greenTheme':
         theme = greenTheme;
         break;
      case 'rainbowTheme':
         theme = rainbowTheme;
         break;
      case 'redTheme':
         theme = redTheme;
         break;
      default:
         theme = defaultTheme;
   }

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         {children}
      </ThemeProvider>
   );
};

export default ThemeSwitcher;

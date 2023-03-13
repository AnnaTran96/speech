import { createGlobalStyle } from 'styled-components/macro';

import cursor from 'assets/icons/cursor.svg';

export const GlobalStyles = createGlobalStyle`
html {
   cursor: url(${cursor}), auto;
}

html,
body,
#root {
   height: 100vh;
}

body {
   background: ${(props) => props.theme.colors.background};
   font-family: 'Quicksand', sans-serif;
   margin: 0;
   overflow-x: hidden;

   button {
      font-family: inherit;
   }
`;

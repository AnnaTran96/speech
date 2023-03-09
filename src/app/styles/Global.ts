import { createGlobalStyle } from 'styled-components';

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
   background: #a4a9d2;
   font-family: 'Quicksand', sans-serif;
   margin: 0;
   overflow-x: hidden;

   button {
      font-family: inherit;
   }
`;

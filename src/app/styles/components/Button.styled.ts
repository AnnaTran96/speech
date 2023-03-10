import styled from 'styled-components/macro';

import cursor from 'assets/icons/cursor-click.svg';

export const Button = styled.button`
   padding: 5px 40px;
   border: 3px solid #000000;
   border-radius: 10px;
   box-shadow: 6px 7px 0px -2px #000000;
   font-size: 1.5em;
   color: ${(prop) => prop.theme.colors.text};
   cursor: url(${cursor}), auto;
   background-color: ${(prop) => prop.theme.colors.main};

   &:focus {
      outline: none;
   }
`;

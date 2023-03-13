import cursor from 'assets/icons/cursor-click.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import styled from 'styled-components/macro';

export const SearchBarForm = styled.form`
   display: flex;
   flex-direction: row;

   *:focus {
      outline: none;
   }
`;

export const SearchButton = styled.button`
   border: 3px solid #000000;
   border-top-right-radius: 19.5px;
   border-bottom-right-radius: 19.5px;
   border-left: none;
   box-shadow: 6px 7px 0px -2px #000000;
   background: #ffffff;
   background: ${(prop) => prop.theme.colors.main};
   cursor: url(${cursor}), auto;
   padding: 1em;
`;

export const SearchIcon = styled(Search)`
   width: 3.6em;
   height: 3.6em;
   fill: none;

   path {
      fill: none;
   }
`;

export const ToggleContainer = styled.div`
   position: relative;

   &::before {
      position: absolute;
      content: '';
      background: ${(prop) => prop.theme.colors.text};
      height: 12px;
      width: 2px;
      transform: rotate(-40deg);
      bottom: -8px;
      right: 23px;
   }
`;

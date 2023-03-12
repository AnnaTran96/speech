import styled from 'styled-components/macro';

import cursor from 'assets/icons/cursor-click.svg';
import deleteIcon from 'assets/icons/delete.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';

export const SearchBarForm = styled.form`
   display: flex;
   flex-direction: row;

   *:focus {
      outline: none;
   }
`;

export const SearchField = styled.input`
   flex-grow: 2;
   border: 3px solid #000000;
   border-top-left-radius: 19.5px;
   border-bottom-left-radius: 19.5px;
   border-right: none;
   box-shadow: 10px 7px 0px -2px #000000;
   width: 25em;
   padding: 1em;
   font-size: 1.5em;
   font-family: inherit;

   ::placeholder {
      color: #000000;
   }

   &::selection {
      background: ${(prop) => prop.theme.colors.searchSelection};
      color: #ffffff;
   }

   &::-webkit-search-cancel-button {
      display: none;
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

export const CollapseSearchField = styled.input`
   height: 22px;
   width: 22px;
   border-radius: 50%;
   border: 2px solid ${(prop) => prop.theme.colors.searchIcon};
   background-color: transparent;
   outline: none;
   box-sizing: border-box;
   font-size: 2em;
   font-family: inherit;
   color: transparent;
   transition: 0.5s;

   ::placeholder {
      color: ${(props) => props.theme.colors.searchIcon};
   }

   &::selection {
      color: ${(prop) => prop.theme.colors.searchSelection};
      background: ${(prop) => prop.theme.colors.collapseSearchSelection};
   }

   &:focus {
      width: 320px;
      height: 40px;
      border-radius: 100px;
      padding-left: 40px;
      background: transparent;
      font-size: 0.65em;
   }

   &::-webkit-search-cancel-button {
      -webkit-appearance: none;
      height: 45px;
      width: 45px;
      position: relative;
      right: 5px;
      content: url(${deleteIcon});
   }
`;

import styled from 'styled-components';

import cursor from 'assets/icons/cursor-click.svg';
import deleteIcon from 'assets/icons/delete.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';

export const SearchBarForm = styled.form`
   display: flex;
   flex-direction: row;

   ::placeholder {
      color: #000000;
   }

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

   &::selection {
      background-color: $#ffc0cb;
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
   background-color: #ffc0cb;
   cursor: url(${cursor}), auto;
   padding: 1em;
`;

export const SearchIcon = styled(Search)`
   width: 3.6em;
   height: 3.6em;
   fill: none;
`;

export const ToggleContainer = styled.div`
   position: relative;

   ::placeholder {
      opacity: 0;
      color: #000000;
   }

   &::before {
      position: absolute;
      content: '';
      background-color: #000000;
      height: 18px;
      width: 4px;
      transform: rotate(-50deg);
      bottom: -8px;
      right: 0;
   }
`;

export const CollapseSearchField = styled.input`
   height: 35px;
   width: 35px;
   border-radius: 50%;
   border: 4px solid #000000;
   background-color: transparent;
   outline: none;
   box-sizing: border-box;
   font-size: 2em;
   color: transparent;
   transition: 0.5s;

   &::selection {
      color: #ffc0cb;
      background-color: #ffffff;
   }

   &:focus {
      width: 400px;
      height: 60px;
      border-radius: 100px;
      padding-left: 40px;
      color: #000000;
      background-color: #ffc0cb;
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

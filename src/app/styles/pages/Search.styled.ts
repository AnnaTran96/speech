import Input from 'app/common/components/Input/Input';
import { Container } from 'app/styles/App.styled';
import styled from 'styled-components/macro';

export const SearchContainer = styled(Container)`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
`;

export const InputField = styled(Input)`
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

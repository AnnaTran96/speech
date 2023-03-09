import styled from 'styled-components';

import { ReactComponent as ChevronDownIcon } from 'assets/icons/arrow-down.svg';

export const DropdownContainer = styled.div`
   margin: 0;
`;

export const TitleContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 !important;
`;

export const Title = styled.span`
   font-size: 0.65em;
   margin: 0;
`;

export const ChevronIcon = styled(ChevronDownIcon)`
   margin: 0 5px !important;
   width: 25px;
   height: 25px;
   fill: #000000;
`;

export const SelectDropdown = styled.ul`
   position: absolute;
   list-style: none;
   border: 3px solid #000000;
   background-color: #ffffff;
   padding-left: 0;
   transform: translate(-33%, 21.5%);
   border-top: none;
   border-bottom-left-radius: 8px;
   border-bottom-right-radius: 8px;
   box-shadow: 6px 7px 0px -2px #000000;
   z-index: 1;
`;

export const DropdownOption = styled.li`
   font-size: 0.65em;
   margin: 0;
   padding: 10px;

   &:hover {
      background-color: #ffc0cb;
   }

   &:last-child:hover {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
   }
`;

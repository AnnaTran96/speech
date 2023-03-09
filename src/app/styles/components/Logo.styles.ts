import styled, { css } from 'styled-components';

import cursor from 'assets/icons/cursor-click.svg';

const baseStyles = css`
   display: flex;
   align-items: center;
`;

export const LogoContainer = styled.div`
   ${baseStyles}
   justify-content: center;
   cursor: url(${cursor}), auto;
`;

export const LogoName = styled.h1`
   font-family: 'Staatliches', cursive;
   font-size: 2.5em;
   color: #000000;
   margin: 0 10px;
   background: transparent;
   border: none;
`;

export const SoundLines = styled.div`
   ${baseStyles}
`;

export const SoundLine = styled.div`
   box-sizing: border-box;
   position: relative;
   display: block;
   width: 4px;
   height: 32px;
   background-color: #000000;
   margin: 2px;

   &:nth-child(2) {
      height: 26px;
   }

   &:nth-child(3) {
      height: 20px;
   }

   &:last-child {
      height: 14px;
   }
`;

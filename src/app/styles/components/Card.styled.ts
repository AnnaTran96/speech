import styled, { css } from 'styled-components/macro';

const baseStyles = css`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const CardContainer = styled.div`
   width: 50vw;
   background-color: ${(prop) => prop.theme.colors.cardBackground};
   border-radius: 25px;
   border: 3px solid #000000;
   box-shadow: 10px 10px 0px -2px #000000;
   display: flex;
   flex-direction: column;
   color: ${(prop) => prop.theme.colors.text};
`;

export const CardHeaderControl = styled.div`
   ${baseStyles}
   height: 3.5em;
   width: 100%;
   background-color: ${(prop) => prop.theme.colors.main};
   border-top-left-radius: 19.5px;
   border-top-right-radius: 19.5px;
   border-bottom: 3px solid #000000;
   flex-wrap: nowrap;
   justify-content: flex-end;
   align-content: center;
   overflow: auto;
`;

export const CardHeaderButton = styled.div`
   width: 1.5em;
   height: 1.5em;
   margin: 1em;
   border-radius: 50%;

   &:first-child {
      background-color: ${(prop) => prop.theme.colors.headerButtonOne};
   }

   &:nth-child(2) {
      background-color: ${(prop) => prop.theme.colors.headerButtonTwo};
   }

   &:last-child {
      background-color: ${(prop) => prop.theme.colors.headerButtonThree};
   }
`;

export const CardInnerRow = styled.div`
   padding: 1.5em;
   text-align: center;
`;

export const CardTitleContainer = styled.div`
   ${baseStyles}
   justify-content: center;
   margin-left: 6.5em;
`;

export const CardTitle = styled.h1`
   font-size: 3em;
   margin-right: 0.5em;
`;

export const CardIcons = styled.div`
   display: flex;
   align-items: center;
`;

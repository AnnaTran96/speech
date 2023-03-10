import styled from 'styled-components/macro';

import Card from 'app/common/components/Card/Card';
import { CardHeaderButton } from 'app/styles/components/Card.styled';
import cursorClick from 'assets/icons/cursor-click.svg';
import cursor from 'assets/icons/cursor.svg';

export const Overlay = styled.div`
   background-color: #5e5e5eac;
   width: 100vw;
   height: 100vh;
   z-index: 0;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   position: absolute;
   cursor: url(${cursorClick}), auto;
`;

export const Center = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

export const ModalCard = styled(Card)`
   cursor: url(${cursor}), auto;

   ${CardHeaderButton}:last-child {
      cursor: url(${cursorClick}), auto;

      &:hover::after {
         transition: all 0.25s ease;
         content: 'x';
         font-size: 1.5em;
         font-weight: bold;
         color: #ffffff;
         position: relative;
         top: -5px;
      }
   }
`;

import styled from 'styled-components';

import Card from 'app/common/components/Card/Card';
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
`;

// .closeButton {
//    cursor: url('../../../../assets/icons/cursor-click.svg'), auto;

//    &:hover::after {
//       transition: all 0.25s ease;
//       content: 'x';
//       color: $primary-white-color;
//    }
// }

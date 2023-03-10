import styled from 'styled-components/macro';

import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg';
import cursor from 'assets/icons/cursor-click.svg';

export const CopyButtonHoverText = styled.span`
   display: none;
`;

export const CopyButton = styled(CopyIcon)`
   margin-top: 0.6em;
   padding: 0.3em;
   width: 28px;
   height: 28px;
   cursor: url(${cursor}), auto;

   &:hover ~ ${CopyButtonHoverText} {
      display: block;
      position: absolute;
      text-align: center;
      font-size: 0.7em;
      color: #808080c3;
      transform: translate(-20%, 200%);
   }
`;

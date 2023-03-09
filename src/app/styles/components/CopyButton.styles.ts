import styled from 'styled-components';

import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg';
import cursor from 'assets/icons/cursor-click.svg';

export const CopyButton = styled(CopyIcon)`
   margin-top: 0.6em;
   padding: 0.3em;
   width: 28px;
   height: 28px;
   cursor: url(${cursor}), auto;
`;

export const CopyButtonHoverText = styled.span`
   display: none;
`;

// .copyButton:hover ~ .copyButtonHoverText {
//    display: block;
//    position: absolute;
//    text-align: center;
//    font-size: 0.7em;
//    color: $icon-hover-text-color;
//    transform: translate(-20%, 200%);
// }

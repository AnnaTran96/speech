import styled from 'styled-components';

import cursor from 'assets/icons/cursor-click.svg';
import { ReactComponent as SoundIcon } from 'assets/icons/sound.svg';

export const SoundButton = styled(SoundIcon)`
   margin-top: 0.6em;
   padding: 0.3em;
   width: 28px;
   height: 28px;
   cursor: url(${cursor}), auto;
`;

export const SoundButtonHoverText = styled.span`
   display: none;
`;

// .soundButton:hover ~ .soundButtonHoverText {
//    display: block;
//    position: absolute;
//    text-align: center;
//    font-size: 0.7em;
//    color: $icon-hover-text-color;
//    transform: translate(-20%, 200%);
// }

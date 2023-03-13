import styled from 'styled-components/macro';

import cursor from 'assets/icons/cursor-click.svg';
import { ReactComponent as SoundIcon } from 'assets/icons/sound.svg';

export const SoundButtonHoverText = styled.span`
   display: none;
`;

export const SoundButton = styled(SoundIcon)`
   margin-top: 0.6em;
   padding: 0.3em;
   width: 28px;
   height: 28px;
   cursor: url(${cursor}), auto;

   &:hover ~ ${SoundButtonHoverText} {
      display: inline-block;
      position: absolute;
      text-align: center;
      font-size: 0.7em;
      color: $#808080c3;
      transform: translate(5%, 60%);
   }
`;

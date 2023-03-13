import styled from 'styled-components/macro';

import cursor from 'assets/icons/cursor-click.svg';
import { ReactComponent as FavouriteIcon } from 'assets/icons/star.svg';

export const FavouriteButtonHoverText = styled.span`
   display: none;
`;

export const FavouriteButton = styled(FavouriteIcon)`
   margin-top: 0.6em;
   padding: 0.3em;
   width: 28px;
   height: 28px;
   cursor: url(${cursor}), auto;

   &:hover ~ ${FavouriteButtonHoverText} {
      display: block;
      position: absolute;
      text-align: center;
      font-size: 0.7em;
      color: #808080c3;
      transform: translate(60%, 200%);
   }

   &:hover {
      fill: ${(prop) => prop.theme.colors.main};
   }
`;

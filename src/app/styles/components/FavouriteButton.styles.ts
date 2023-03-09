import styled from 'styled-components';

import cursor from 'assets/icons/cursor-click.svg';
import { ReactComponent as FavouriteIcon } from 'assets/icons/star.svg';

export const FavouriteButton = styled(FavouriteIcon)`
   margin-top: 0.6em;
   padding: 0.3em;
   width: 28px;
   height: 28px;
   cursor: url(${cursor}), auto;
`;

export const FavouriteButtonHoverText = styled.span`
   display: none;
`;

// .favouriteButton:hover ~ .favouriteButtonHoverText {
//    display: block;
//    position: absolute;
//    text-align: center;
//    font-size: 0.7em;
//    color: $icon-hover-text-color;
//    transform: translate(60%, 200%);
// }

// .favouriteButton:hover {
//    fill: $icon-fill-color;
// }

import styled, { css } from 'styled-components/macro';

import Card from 'app/common/components/Card/Card';

import { Container } from 'app/styles/App.styled';
import { Button } from 'app/styles/components/Button.styled';

import { ReactComponent as AlienIcon } from 'assets/icons/alien.svg';
import cursor from 'assets/icons/cursor.svg';
import { ReactComponent as GameIcon } from 'assets/icons/game-console.svg';

export const HomeContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 1fr;
   grid-column-gap: 10px;
   position: relative;
   height: 100%;
`;

export const HomeCardContainer = styled(Container)`
   margin-top: 50px;
   text-align: center;
`;

export const HomeCard = styled(Card)`
   cursor: url(${cursor}), auto;
`;

export const DogContainer = styled.div`
   margin-top: 50px;
`;

export const HomeButton = styled(Button)`
   margin-top: 50px;
`;

const backgroundIcons = css`
   position: absolute;
`;

export const BackgroundAlienIcon = styled(AlienIcon)`
   ${backgroundIcons}
   right: 25%;
   top: -3.7%;
   width: 150px;
   height: 150px;

   * {
      fill: ${(prop) => prop.theme.colors.alienIcon};
   }
`;

export const BackgroundGameIcon = styled(GameIcon)`
   ${backgroundIcons}
   top: 52%;
   left: 42%;
   width: 160px;
   height: 160px;

   path {
      &:first-child {
         fill: ${(prop) => prop.theme.colors.gameIcon};
      }

      &:nth-child(2) {
         fill: ${(prop) => prop.theme.colors.gameScreenIcon};
      }
   }
`;

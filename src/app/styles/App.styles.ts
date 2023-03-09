import styled from 'styled-components';

import { ReactComponent as StarIcon } from 'assets/icons/glowing-star.svg';
import { ReactComponent as HighVoltageIcon } from 'assets/icons/high-voltage.svg';
import { ReactComponent as RainbowIcon } from 'assets/icons/rainbow.svg';

export const Container = styled.div`
   padding: 20px 50px;

   h1 {
      margin-bottom: 1em;
      font-size: 2.5em;
   }
`;

export const GridBackground = styled.div`
   width: 30em;
   height: 30em;
   background-size: 60px 60px;
   background-image: linear-gradient(to right, #ffffff 2px, transparent 2px),
      linear-gradient(to top, #ffffff 2px, transparent 2px);
   z-index: -4;
   position: fixed;

   &:first-child {
      bottom: 0;
      left: -30px;
   }

   &:last-of-type {
      top: -50px;
      right: -8px;
      width: 50rem;
      height: 40rem;
      background-image: linear-gradient(to left, #ffffff 2px, transparent 2px),
         linear-gradient(to bottom, #ffffff 2px, transparent 2px);
   }
`;

export const BackgroundStarIcon = styled(StarIcon)`
   position: absolute;
   z-index: -1;
   bottom: 0;
   right: 0;
   transform: rotate(-90deg);
   width: 200px;
   height: 200px;
`;

export const BackgroundHighVoltageIcon = styled(HighVoltageIcon)`
   position: absolute;
   z-index: -1;
   top: -6%;
   left: -8%;
   z-index: -1;
   width: 400px;
   height: 400px;
   transform: rotate(190deg);
`;

export const BackgroundRainbowIcon = styled(RainbowIcon)`
   position: absolute;
   z-index: -1;
   width: 200px;
   height: 200px;
   transform: rotate(65deg);
   left: 20%;
   bottom: 5%;
`;

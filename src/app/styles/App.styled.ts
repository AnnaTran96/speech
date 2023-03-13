import styled from 'styled-components/macro';

import { ReactComponent as StarIcon } from 'assets/icons/glowing-star.svg';
import { ReactComponent as HighVoltageIcon } from 'assets/icons/high-voltage.svg';
import { ReactComponent as RainbowIcon } from 'assets/icons/rainbow.svg';

export const Container = styled.div`
   padding: 20px 50px;

   h1 {
      margin-bottom: 1em;
      font-size: 2.5em;
      color: ${(prop) => prop.theme.colors.text};
   }
`;

export const GridBackground = styled.div`
   @media only screen and (min-width: 1200px) {
      width: 30em;
      height: 30em;
      background-size: 60px 60px;
      background-image: linear-gradient(
            to right,
            ${(prop) => prop.theme.colors.gridLines} 2px,
            transparent 2px
         ),
         linear-gradient(
            to top,
            ${(prop) => prop.theme.colors.gridLines} 2px,
            transparent 2px
         );
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
         background-image: linear-gradient(
               to left,
               ${(prop) => prop.theme.colors.gridLines} 2px,
               transparent 2px
            ),
            linear-gradient(
               to bottom,
               ${(prop) => prop.theme.colors.gridLines} 2px,
               transparent 2px
            );
      }
   }
`;

export const BackgroundStarIcon = styled(StarIcon)`
   display: none;
   @media only screen and (min-width: 1200px) {
      display: block;
      position: absolute;
      z-index: -1;
      bottom: 0;
      right: 0;
      transform: rotate(-90deg);
      width: 200px;
      height: 200px;

      * {
         fill: ${(prop) => prop.theme.colors.starIcon};
      }
   }
`;

export const BackgroundHighVoltageIcon = styled(HighVoltageIcon)`
   display: none;
   @media only screen and (min-width: 1200px) {
      display: block;
      position: absolute;
      z-index: -1;
      top: -6%;
      left: -8%;
      z-index: -1;
      width: 400px;
      height: 400px;
      transform: rotate(190deg);
      path {
         fill: ${(prop) => prop.theme.colors.voltageIcon};
      }
   }
`;

export const BackgroundRainbowIcon = styled(RainbowIcon)`
   display: none;

   @media only screen and (min-width: 1200px) {
      display: block;
      position: absolute;
      z-index: -1;
      width: 200px;
      height: 200px;
      transform: rotate(65deg);
      left: 20%;
      bottom: 5%;

      path {
         &:first-child {
            fill: ${(prop) => prop.theme.colors.rainbowIconFillOne};
         }

         &:nth-child(2) {
            fill: ${(prop) => prop.theme.colors.rainbowIconFillTwo};
         }

         &:nth-child(3) {
            fill: ${(prop) => prop.theme.colors.rainbowIconFillThree};
         }

         &:nth-child(4) {
            fill: ${(prop) => prop.theme.colors.rainbowIconFillFour};
         }

         &:nth-child(5) {
            fill: ${(prop) => prop.theme.colors.rainbowIconFillFive};
         }

         &:last-child {
            fill: ${(prop) => prop.theme.colors.rainbowIconFillSix};
         }
      }
   }
`;

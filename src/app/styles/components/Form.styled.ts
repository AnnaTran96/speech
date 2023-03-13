import styled, { css } from 'styled-components/macro';

import CopyButton from 'app/common/components/Buttons/CopyButton/CopyButton';
import SoundButton from 'app/common/components/Buttons/SoundButton/SoundButton';

import { ReactComponent as Arrow } from 'assets/icons/arrows.svg';
import cursor from 'assets/icons/cursor-click.svg';

const baseStyles = css`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

const iconStyles = css`
   width: 15px;
   height: 15px;
`;

export const TranslateTitle = styled.h3`
   margin-top: 0.2em;
`;

export const TranslateOptions = styled.div`
   ${baseStyles}
   justify-content: space-around;

   select {
      width: 12em;
      text-align: center;
      height: 2em;
      border: none;
      font-size: 1em;
      font-family: 'Quicksand', sans-serif;
      background-color: ${(prop) => prop.theme.colors.cardBackground};
      color: ${(prop) => prop.theme.colors.text};

      &:focus {
         outline: none;
      }
   }
`;

export const TranslatedTextContainer = styled.div`
   ${baseStyles}
   margin-top: 1em;
   justify-content: space-evenly;
`;

export const TranslatedTextInnerRow = styled.div`
   padding: 30px 10px;
   width: 100%;

   p {
      font-size: 1.5em;
   }

   &:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background: ${(prop) => prop.theme.colors.translationBoxOne};
   }

   &:last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      background: ${(prop) => prop.theme.colors.translationBoxTwo};
   }
`;

export const ArrowIcon = styled(Arrow)`
   margin-top: 0;
   width: 35px;
   height: 35px;
   cursor: url(${cursor}), auto;

   * {
      fill: ${(prop) => prop.theme.colors.text};
   }
`;

export const Icons = styled.div`
   position: absolute;
   transform: translate(-15%, -25%);

   * {
      fill: ${(prop) => prop.theme.colors.text};
   }
`;

export const FormCopyButton = styled(CopyButton)`
   ${iconStyles}
`;

export const FormSoundButton = styled(SoundButton)`
   ${iconStyles}
`;

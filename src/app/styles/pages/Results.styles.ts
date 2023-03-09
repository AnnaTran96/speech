import styled, { css } from 'styled-components';

import Card from 'app/common/components/Card/Card';
import { Container } from 'app/styles/App.styles';

import { Button } from '../components/Button.styles';

const baseStyles = css`
   display: flex;
   align-items: center;
`;

export const ResultsContainer = styled(Container)`
   ${baseStyles}
   justify-content: center;
   flex-direction: column;
`;

export const ResultsTitleContainer = styled.div`
   ${baseStyles}
   flex-direction: row;
`;

export const ResultsCard = styled(Card)`
   margin-top: -2em;
`;

export const OpenModalButton = styled(Button)`
   margin-top: 0.8em;
`;

export const PartOfSpeech = styled.h3`
   margin-top: 2.2em;
`;

export const Breakline = styled.div`
   height: 2px;
   width: 100%;
   background-color: #93939317;
   position: relative;
   top: -0.2em;
`;

export const Information = styled.div`
   margin-top: -2.4em;
`;

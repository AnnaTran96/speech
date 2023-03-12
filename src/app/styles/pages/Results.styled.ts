import styled from 'styled-components/macro';

import { Container } from 'app/styles/App.styled';
import { Button } from 'app/styles/components/Button.styled';

export const ResultsContainer = styled(Container)`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   color: ${(props) => props.theme.colors.text};
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
   background-color: ${(prop) => prop.theme.colors.breakline};
   position: relative;
   top: -0.2em;
`;

export const Information = styled.div`
   margin-top: -2.4em;
`;

export const NoResults = styled.p`
   font-size: 1.5em;
`;

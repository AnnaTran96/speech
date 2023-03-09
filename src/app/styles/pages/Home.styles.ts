import styled, { css } from 'styled-components';

import Card from 'app/common/components/Card/Card';
import { Button } from 'app/styles/components/Button.styles';
import { ReactComponent as AlienIcon } from 'assets/icons/alien.svg';
import { ReactComponent as LollipopIcon } from 'assets/icons/lollipop.svg';

export const HomeContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 1fr;
   grid-column-gap: 10px;
   position: relative;
   height: 100%;
`;

export const HomeCardContainer = styled.div`
   margin-top: 50px;
   text-align: center;
`;

export const HomeCard = styled(Card)`
   cursor: url('../../../../assets/icons/cursor.svg'), auto;
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
   top: -9%;
   width: 150px;
   height: 150px;
`;

export const BackgroundLollipopIcon = styled(LollipopIcon)`
   ${backgroundIcons}
   transform: rotate(-90deg);
   bottom: 10%;
   left: 44%;
   width: 120px;
   height: 120px;
`;

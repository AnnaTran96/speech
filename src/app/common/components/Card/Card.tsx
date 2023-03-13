import { MouseEventHandler, ReactNode } from 'react';

import CopyButton from 'app/common/components/Buttons/CopyButton/CopyButton';
import FavouriteButton from 'app/common/components/Buttons/FavouriteButton/FavouriteButton';

import {
   CardContainer,
   CardHeaderButton,
   CardHeaderControl,
   CardIcons,
   CardInnerRow,
   CardTitle,
   CardTitleContainer,
} from 'app/styles/components/Card.styled';

interface CardProps {
   children: ReactNode;
   className?: string;
   closeModal?: MouseEventHandler<HTMLDivElement>;
   title?: string;
}

const Card = ({ children, closeModal, title, className }: CardProps) => {
   return (
      <CardContainer className={className} data-testid='card-container'>
         <CardHeaderControl>
            <CardHeaderButton />
            <CardHeaderButton />
            <CardHeaderButton onClick={closeModal} className={className} />
         </CardHeaderControl>
         <CardInnerRow>
            {title && (
               <CardTitleContainer>
                  <CardTitle>{title}</CardTitle>
                  <CardIcons>
                     <CopyButton text={title}></CopyButton>
                     <FavouriteButton showFavouriteText={true} />
                  </CardIcons>
               </CardTitleContainer>
            )}
            {children}
         </CardInnerRow>
      </CardContainer>
   );
};

export default Card;

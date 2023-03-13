import { MouseEventHandler, ReactNode } from 'react';

import CopyButton from 'app/common/components/Buttons/CopyButton/CopyButton';
import FavouriteButton from 'app/common/components/Buttons/FavouriteButton/FavouriteButton';
import ThemeSwitcher from 'app/common/components/ThemeSwitcher/ThemeSwitcher';

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
   closeButtonClassName?: string;
   className?: string;
   closeModal?: MouseEventHandler<HTMLDivElement>;
   title?: string;
}

const Card = ({
   children,
   closeButtonClassName,
   closeModal,
   title,
   className,
}: CardProps) => {
   return (
      <ThemeSwitcher>
         <CardContainer className={className}>
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
      </ThemeSwitcher>
   );
};

export default Card;

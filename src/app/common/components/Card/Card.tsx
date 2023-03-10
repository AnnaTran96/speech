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

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

interface CardProps {
   children: React.ReactNode;
   closeButtonClassName?: string;
   className?: string;
   closeModal?: React.MouseEventHandler<HTMLDivElement>;
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
                        <FavouriteButton />
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

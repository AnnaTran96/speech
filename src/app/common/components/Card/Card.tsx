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
} from 'app/styles/components/Card.styles';

interface CardProps {
   children: React.ReactNode;
   className?: string;
   closeClassName?: string;
   closeModal?: React.MouseEventHandler<HTMLDivElement>;
   title?: string;
}

const Card = ({
   children,
   className,
   closeClassName,
   closeModal,
   title,
}: CardProps) => {
   return (
      <CardContainer>
         <CardHeaderControl>
            <CardHeaderButton />
            <CardHeaderButton />
            <CardHeaderButton onClick={closeModal} />
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
   );
};

export default Card;

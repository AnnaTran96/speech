import styles from 'common/components/Card/Card.module.scss';

import CopyButton from '../CopyButton/CopyButton';
import FavouriteButton from '../FavouriteButton/FavouriteButton';

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
      <div className={`${styles.cardContainer}`} data-testid='card-container'>
         <div className={`${styles.cardHeaderControl}`}>
            <div className={`${styles.cardHeaderButton}`}></div>
            <div className={`${styles.cardHeaderButton}`}></div>
            <div
               className={`${styles.cardHeaderButton} ${closeClassName}`}
               onClick={closeModal}></div>
         </div>
         <div className={`${styles.cardInnerRow} ${className}`}>
            {title && (
               <div className={`${styles.cardTitleContainer}`}>
                  <h1 className={`${styles.cardTitle}`}>{title}</h1>
                  <div className={`${styles.cardIcons}`}>
                     <CopyButton
                        text={title}
                        className={`${styles.cardCopyButton}`}></CopyButton>
                     <FavouriteButton className={`${styles.favouriteIcon}`} />
                  </div>
               </div>
            )}
            {children}
         </div>
      </div>
   );
};

export default Card;

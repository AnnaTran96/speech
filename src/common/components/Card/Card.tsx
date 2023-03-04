import styles from 'common/components/Card/Card.module.scss';

interface CardProps {
   children: React.ReactNode;
   onClick?: React.MouseEventHandler<HTMLDivElement>;
   className?: string;
   closeClassName?: string;
   closeModal?: React.MouseEventHandler<HTMLDivElement>;
}

const Card = ({
   children,
   className,
   onClick,
   closeClassName,
   closeModal,
}: CardProps) => {
   return (
      <div
         className={`${styles.cardContainer}`}
         data-testid='card-container'
         onClick={onClick}>
         <div className={`${styles.cardHeaderControl}`}>
            <div className={`${styles.cardHeaderButton}`}></div>
            <div className={`${styles.cardHeaderButton}`}></div>
            <div
               className={`${styles.cardHeaderButton} ${closeClassName}`}
               onClick={closeModal}></div>
         </div>
         <div className={`${styles.cardInnerRow} ${className}`}>{children}</div>
      </div>
   );
};

export default Card;

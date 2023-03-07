import { useState } from 'react';

import styles from 'common/components/FavouriteButton/FavouriteButton.module.scss';

import { ReactComponent as FavouriteIcon } from 'assets/icons/star.svg';

interface FavouriteButtonProps {
   className?: string;
}

const FavouriteButton = ({ className }: FavouriteButtonProps) => {
   const [isFavourite, setIsFavourite] = useState<boolean>(false);

   const toggleFavourite = () => {
      setIsFavourite(!isFavourite);
   };

   return (
      <>
         <FavouriteIcon
            className={`${styles.favouriteButton} ${className}`}
            onClick={toggleFavourite}
            fill={isFavourite ? '#ffc0cb' : 'none'}
         />
         <span className={`${styles.favouriteButtonHoverText}`}>
            {isFavourite ? 'Added!' : 'Favourite'}
         </span>
      </>
   );
};

export default FavouriteButton;

import { useState } from 'react';

import styles from 'common/components/FavouriteButton/FavouriteButton.module.scss';

import { ReactComponent as FavouriteIcon } from 'assets/icons/star.svg';

interface FavouriteButtonProps {
   className?: string;
}

const FavouriteButton = ({ className }: FavouriteButtonProps) => {
   const [isFavourite, setIsFavourite] = useState<boolean>(false);

   return (
      <>
         <FavouriteIcon className={`${styles.favouriteButton} ${className}`} />
         <span className={`${styles.favouriteButtonHoverText}`}>Favourite</span>
      </>
   );
};

export default FavouriteButton;

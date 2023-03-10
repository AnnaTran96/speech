import { useState } from 'react';

import {
   FavouriteButtonHoverText,
   FavouriteButton as FavouriteIcon,
} from 'app/styles/components/FavouriteButton.styled';

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
         <FavouriteIcon onClick={toggleFavourite} />
         <FavouriteButtonHoverText>
            {isFavourite ? 'Added!' : 'Favourite'}
         </FavouriteButtonHoverText>
      </>
   );
};

export default FavouriteButton;

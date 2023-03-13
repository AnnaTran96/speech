import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
   FavouriteButtonHoverText,
   FavouriteButton as FavouriteIcon,
} from 'app/styles/components/FavouriteButton.styled';

interface FavouriteButtonProps {
   showFavouriteText: boolean;
}

const FavouriteButton = ({ showFavouriteText }: FavouriteButtonProps) => {
   const [isFavourite, setIsFavourite] = useState<boolean>(false);
   const navigate = useNavigate();

   const toggleFavourite = () => {
      setIsFavourite(!isFavourite);
      if (!showFavouriteText) {
         navigate('/favourites');
      }
   };

   return (
      <>
         <FavouriteIcon onClick={toggleFavourite} />
         {showFavouriteText && (
            <FavouriteButtonHoverText>
               {isFavourite ? 'Added!' : 'Favourite'}
            </FavouriteButtonHoverText>
         )}
      </>
   );
};

export default FavouriteButton;

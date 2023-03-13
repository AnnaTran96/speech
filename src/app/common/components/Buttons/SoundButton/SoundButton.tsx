import {
   SoundButtonHoverText,
   SoundButton as SoundIcon,
} from 'app/styles/components/SoundButton.styled';

const SoundButton = () => {
   return (
      <>
         <SoundIcon />
         <SoundButtonHoverText>Translate By Voice</SoundButtonHoverText>
      </>
   );
};

export default SoundButton;

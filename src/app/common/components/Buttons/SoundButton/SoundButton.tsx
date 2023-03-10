import {
   SoundButtonHoverText,
   SoundButton as SoundIcon,
} from 'app/styles/components/SoundButton.styled';

interface SoundButtonProps {
   className?: string;
}

const SoundButton = ({ className }: SoundButtonProps) => {
   return (
      <>
         <SoundIcon />
         <SoundButtonHoverText>Translate By Voice</SoundButtonHoverText>
      </>
   );
};

export default SoundButton;

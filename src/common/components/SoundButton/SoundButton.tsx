import styles from 'common/components/SoundButton/SoundButton.module.scss';

import { ReactComponent as SoundIcon } from 'assets/icons/sound.svg';

interface SoundButtonProps {
   className?: string;
}

const SoundButton = ({ className }: SoundButtonProps) => {
   return (
      <>
         <SoundIcon className={`${styles.soundButton} ${className}`} />
         <span className={`${styles.soundButtonHoverText}`}>
            Translate By Voice
         </span>
      </>
   );
};

export default SoundButton;

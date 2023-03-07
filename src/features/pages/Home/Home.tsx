import { useNavigate } from 'react-router-dom';

import Button from 'common/components/Button/Button';
import Card from 'common/components/Card/Card';

import { ReactComponent as AlienIcon } from 'assets/icons/alien.svg';
import { ReactComponent as StarIcon } from 'assets/icons/glowing-star.svg';
import { ReactComponent as HighVoltageIcon } from 'assets/icons/high-voltage.svg';
import { ReactComponent as LollipopIcon } from 'assets/icons/lollipop.svg';
import { ReactComponent as RainbowIcon } from 'assets/icons/rainbow.svg';
import styles from 'features/pages/Home/Home.module.scss';

const Home = () => {
   const navigate = useNavigate();

   return (
      <div className={`${styles.home} container`} data-testid='home-container'>
         <div className={`${styles.duck}`}>{''}</div>
         <div className={`${styles.homeCardContainer}`}>
            <Card className={`${styles.homeCard}`}>
               <h1>All in one dictionary & translation service</h1>
               <p>
                  It is the first service to include both a dictionary and
                  translation service.
               </p>
               <p>You can learn, listen and save the words for the future!</p>
            </Card>
            <div className={`${styles.getStartedButtonContainer}`}>
               <Button
                  className={`${styles.getStartedButton}`}
                  onClick={() => navigate('/about')}>
                  Get Started
               </Button>
            </div>
         </div>
         <div className={`${styles.backgroundIcons}`}>
            <AlienIcon className={`${styles.alienIcon} ${styles.icon}`} />
            <HighVoltageIcon
               className={`${styles.highVoltageIcon} ${styles.icon}`}
            />
            <RainbowIcon className={`${styles.rainbowIcon} ${styles.icon}`} />
            <StarIcon className={`${styles.starIcon} ${styles.icon}`} />
            <LollipopIcon className={`${styles.lollipopIcon} ${styles.icon}`} />
         </div>
      </div>
   );
};

export default Home;

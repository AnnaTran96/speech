import { useNavigate } from 'react-router-dom';

import {
   LogoContainer,
   LogoName,
   SoundLine,
   SoundLines,
} from 'app/styles/components/Logo.styles';

const Logo = () => {
   const navigate = useNavigate();

   return (
      <LogoContainer onClick={() => navigate('/')}>
         <LogoName>Speech</LogoName>
         <div className='logoShape'>
            <SoundLines>
               <SoundLine />
               <SoundLine />
               <SoundLine />
               <SoundLine />
            </SoundLines>
         </div>
      </LogoContainer>
   );
};

export default Logo;

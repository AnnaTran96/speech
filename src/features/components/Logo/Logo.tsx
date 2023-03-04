import { useNavigate } from 'react-router-dom';

import 'features/components/Logo/Logo.scss';

const Logo = () => {
   const navigate = useNavigate();

   return (
      <div className='logo' data-testid='logo-container'>
         <div className='logoShape'>
            <span className='circle'>
               <div className='soundCurves'>
                  <span className='soundCurve'></span>
                  <span className='soundCurve'></span>
                  <span className='soundCurve'></span>
               </div>
            </span>
         </div>
         <button className='logoName' onClick={() => navigate('/')}>
            Speech
         </button>
      </div>
   );
};

export default Logo;

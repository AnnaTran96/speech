import { useNavigate } from 'react-router-dom';

import 'features/components/Logo/Logo.scss';

const Logo = () => {
   const navigate = useNavigate();

   return (
      <div
         className='logo'
         data-testid='logo-container'
         onClick={() => navigate('/')}>
         <h1 className='logoName'>Speech</h1>
         <div className='logoShape'>
            <div className='soundLines'>
               <span className='soundLine'></span>
               <span className='soundLine'></span>
               <span className='soundLine'></span>
               <span className='soundLine'></span>
            </div>
         </div>
      </div>
   );
};

export default Logo;

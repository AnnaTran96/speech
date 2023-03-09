import { useState } from 'react';

import {
   CopyButtonHoverText,
   CopyButton as CopyIcon,
} from 'app/styles/components/CopyButton.styles';

interface CopyButtonProps {
   text: string;
   className?: string;
}

const CopyButton = ({ text, className }: CopyButtonProps) => {
   const [isCopied, setIsCopied] = useState<boolean>(false);

   const copyText = async () => {
      try {
         await navigator.clipboard.writeText(text);
         setIsCopied(true);

         setTimeout(() => {
            setIsCopied(false);
         }, 2000);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <CopyIcon onClick={copyText} />
         <CopyButtonHoverText>
            {isCopied ? 'Copied' : 'Copy to Clipboard'}
         </CopyButtonHoverText>
      </>
   );
};

export default CopyButton;

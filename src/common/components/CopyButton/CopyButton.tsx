import { useState } from 'react';

import styles from 'common/components/CopyButton/CopyButton.module.scss';

import { ReactComponent as CopyIcon } from 'assets/icons/copy.svg';

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
         <CopyIcon
            className={`${styles.copyButton} ${className}`}
            onClick={copyText}
         />
         <span className={`${styles.copyButtonHoverText}`}>
            {isCopied ? 'Copied' : 'Copy to Clipboard'}
         </span>
      </>
   );
};

export default CopyButton;

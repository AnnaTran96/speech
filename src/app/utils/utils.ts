import { useEffect } from 'react';

export const transformToUpperCase = (word: string) => {
   return word.charAt(0).toUpperCase() + word.slice(1);
};

export const clickOutside = (ref: any, onClickOutside: any) => {
   useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         if (ref.current && !ref.current.contains(e.target)) {
            onClickOutside();
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [ref, onClickOutside]);
};

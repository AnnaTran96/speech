import React, { useState } from 'react';

import styles from 'common/components/Form/Form.module.scss';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrows.svg';

import CopyButton from '../CopyButton/CopyButton';
import SoundButton from '../SoundButton/SoundButton';

interface FormProps {
   title: string;
}

const languagesOptions = [
   { value: 'ar', label: 'Arabic' },
   { value: 'zh', label: 'Chinese' },
   { value: 'en', label: 'English' },
   { value: 'fr', label: 'French' },
   { value: 'de', label: 'German' },
   { value: 'it', label: 'Italian' },
   { value: 'jr', label: 'Japanese' },
   { value: 'ko', label: 'Korean' },
   { value: 'pt', label: 'Portugese' },
   { value: 'es', label: 'Spanish' },
   { value: 'tr', label: 'Turkish' },
];

const Form = ({ title }: FormProps) => {
   const [translateFrom, setTranslateFrom] = useState<string>('');
   const [translateTo, setTranslateTo] = useState<string>('');
   const [initialWord, setinitialWord] = useState<string>(title);
   const [translatedWord, setTranslatedWord] =
      useState<string>('Translated Word');

   const handleTranslateFromChange = (
      e: React.ChangeEvent<HTMLSelectElement>
   ) => {
      setTranslateFrom(e.currentTarget.value);
   };

   const handleTranslateToChange = (
      e: React.ChangeEvent<HTMLSelectElement>
   ) => {
      setTranslateTo(e.currentTarget.value);
   };

   const handleLanguageSwap = () => {
      setTranslateFrom(translateTo);
      setTranslateTo(translateFrom);
      setinitialWord(translatedWord);
      setTranslatedWord(initialWord);
   };

   const handleLanguageOptions = () => {
      return languagesOptions.map((language) => {
         return (
            <option key={language.label} value={language.value}>
               {language.label}
            </option>
         );
      });
   };

   const setValue = (value: string) => {
      const checkValue = languagesOptions.find(
         (language) => language.value === value
      );
      return checkValue?.value;
   };

   return (
      <div className={`${styles.formContainer}`}>
         <h3 className={`${styles.translateTitle}`}>Translate</h3>
         <form>
            <div className={`${styles.translateOptions}`}>
               <select
                  id='translateFrom'
                  name='translateFrom'
                  onChange={handleTranslateFromChange}
                  defaultValue={setValue('en')}
                  value={setValue(translateFrom)}>
                  {handleLanguageOptions()}
               </select>
               <ArrowIcon
                  onClick={handleLanguageSwap}
                  width={35}
                  height={35}
                  className={`${styles.arrowIcon}`}
               />
               <select
                  id='translateTo'
                  name='translateTo'
                  onChange={handleTranslateToChange}
                  defaultValue='defaultValue'
                  value={setValue(translateTo)}>
                  <option disabled={true} value='defaultValue'>
                     Select a language
                  </option>
                  {handleLanguageOptions()}
               </select>
            </div>

            <div className={`${styles.translatedText}`}>
               <div className={`${styles.translatedTextInnerRow}`}>
                  <p>{initialWord}</p>
               </div>
               <div className={`${styles.translatedTextInnerRow}`}>
                  <p>{translatedWord}</p>
                  <div className={`${styles.formIcons}`}>
                     <CopyButton
                        text='TEST'
                        className={`${styles.formCopyButton}`}
                     />
                     <SoundButton className={`${styles.formSoundButton}`} />
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
};

export default Form;

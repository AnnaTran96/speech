import React, { useState } from 'react';

import {
   ArrowIcon,
   FormCopyButton,
   FormSoundButton,
   Icons,
   TranslateOptions,
   TranslateTitle,
   TranslatedTextContainer,
   TranslatedTextInnerRow,
} from 'app/styles/components/Form.styled';

interface FormProps {
   title: string;
}

const languagesOptions = [
   { value: 'zh', label: 'Chinese' },
   { value: 'en', label: 'English' },
   { value: 'fr', label: 'French' },
   { value: 'de', label: 'German' },
   { value: 'it', label: 'Italian' },
   { value: 'jr', label: 'Japanese' },
   { value: 'ko', label: 'Korean' },
   { value: 'pt', label: 'Portugese' },
   { value: 'es', label: 'Spanish' },
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
      <div>
         <TranslateTitle>Translate</TranslateTitle>
         <form>
            <TranslateOptions>
               <select
                  id='translateFrom'
                  name='translateFrom'
                  onChange={handleTranslateFromChange}
                  defaultValue={setValue('en')}
                  value={setValue(translateFrom)}>
                  {handleLanguageOptions()}
               </select>
               <ArrowIcon onClick={handleLanguageSwap} />
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
            </TranslateOptions>
            <TranslatedTextContainer>
               <TranslatedTextInnerRow>
                  <p>{initialWord}</p>
               </TranslatedTextInnerRow>
               <TranslatedTextInnerRow>
                  <p>{translatedWord}</p>
                  <Icons>
                     <FormCopyButton text='TEST' />
                     <FormSoundButton />
                  </Icons>
               </TranslatedTextInnerRow>
            </TranslatedTextContainer>
         </form>
      </div>
   );
};

export default Form;

import { useEffect, useRef, useState } from 'react';

import styles from 'common/components/Dropdown/Dropdown.module.scss';

import { Option } from 'app.interfaces';
import { ReactComponent as ChevronDownIcon } from 'assets/icons/arrow-down.svg';

interface DropdownProps {
   defaultOption?: Option;
   options: Option[];
   onSelect: any;
   title?: string;
}

const Dropdown = ({
   defaultOption,
   options,
   onSelect,
   title,
}: DropdownProps) => {
   const [selectedOption, setSelectedOption] = useState(defaultOption);
   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
   const ref = useRef<any>(null);

   const toggleDropDown = () => {
      setIsDropdownOpen(!isDropdownOpen);
   };

   const handleSelectedOption = (option: Option) => {
      setSelectedOption(option);
      onSelect(option);
      setIsDropdownOpen(false);
   };

   useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         if (ref.current && !ref.current.contains(e.target)) {
            setIsDropdownOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
   }, [ref]);

   return (
      <div className={`${styles.dropdown}`} ref={ref}>
         <div className={`${styles.titleContainer}`} onClick={toggleDropDown}>
            {defaultOption ? (
               <span className={`${styles.title}`}>
                  {selectedOption?.label}
               </span>
            ) : (
               <span className={`${styles.title}`}>{title}</span>
            )}
            <ChevronDownIcon className={`${styles.icon}`} />
         </div>

         {isDropdownOpen && (
            <ul className={`${styles.dropdownOptions}`}>
               {options.map((option: Option, id: number) => (
                  <li
                     key={id}
                     onClick={() => handleSelectedOption(option)}
                     className={`${styles.option}`}>
                     {option.label}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default Dropdown;

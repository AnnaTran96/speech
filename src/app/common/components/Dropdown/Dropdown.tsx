import { useRef, useState } from 'react';

import { Option } from 'app/app.interfaces';
import {
   ChevronIcon,
   DropdownContainer,
   DropdownOption,
   SelectDropdown,
   Title,
   TitleContainer,
} from 'app/styles/components/Dropdown.styles';
import { clickOutside } from 'app/utils/utils';

interface DropdownProps {
   defaultOption?: Option;
   options: Option[];
   onSelect: (option: Option) => void;
   title?: string;
   className?: string;
   optionClassName?: string;
}

const Dropdown = ({
   defaultOption,
   options,
   onSelect,
   title,
   className,
   optionClassName,
}: DropdownProps) => {
   const [selectedOption, setSelectedOption] = useState(defaultOption);
   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
   const ref = useRef<HTMLDivElement>(null);

   const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
   };

   const handleSelectedOption = (option: Option) => {
      setSelectedOption(option);
      onSelect(option);
      setIsDropdownOpen(false);
   };

   clickOutside(ref, () => {
      setIsDropdownOpen(false);
   });

   return (
      <DropdownContainer ref={ref}>
         <TitleContainer onClick={toggleDropdown}>
            {defaultOption ? (
               <Title>{selectedOption?.label}</Title>
            ) : (
               <Title>{title}</Title>
            )}
            <ChevronIcon />
         </TitleContainer>
         {isDropdownOpen && (
            <SelectDropdown>
               {options.map((option: Option) => (
                  <DropdownOption
                     key={option.value}
                     onClick={() => handleSelectedOption(option)}>
                     {option.icon
                        ? `${option.label} ${option.icon}`
                        : option.label}
                  </DropdownOption>
               ))}
            </SelectDropdown>
         )}
      </DropdownContainer>
      // <div className={`${styles.dropdown}`} ref={ref}>
      //    <div className={`${styles.titleContainer}`} onClick={toggleDropDown}>
      //       {defaultOption ? (
      //          <span className={`${styles.title}`}>
      //             {selectedOption?.label}
      //          </span>
      //       ) : (
      //          <span className={`${styles.title}`}>{title}</span>
      //       )}
      //       <ChevronDownIcon className={`${styles.chevronIcon}`} />
      //    </div>

      //    {isDropdownOpen && (
      //       <ul className={`${styles.dropdownOptions} ${className}`}>
      //          {options.map((option: Option, id: number) => (
      //             <li
      //                key={id}
      //                onClick={() => handleSelectedOption(option)}
      //                className={`${styles.option} ${optionClassName}`}>
      //                {option.icon
      //                   ? `${option.label} ${option.icon}`
      //                   : option.label}
      //             </li>
      //          ))}
      //       </ul>
      //    )}
      // </div>
   );
};

export default Dropdown;

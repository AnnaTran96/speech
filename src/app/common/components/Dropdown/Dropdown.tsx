import { useRef, useState } from 'react';

import { clickOutside } from 'app/utils/utils';

import {
   ChevronIcon,
   DropdownContainer,
   DropdownOption,
   DropdownTitle,
   DropdownTitleContainer,
   SelectDropdown,
} from 'app/styles/components/Dropdown.styled';

import { Option } from 'app/app.interfaces';

interface DropdownProps {
   defaultOption?: Option;
   options: Option[];
   onSelect: (option: Option) => void;
   title?: string;
   className?: string;
}

const Dropdown = ({
   defaultOption,
   options,
   onSelect,
   title,
   className,
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
      <DropdownContainer ref={ref} className={className}>
         <DropdownTitleContainer onClick={toggleDropdown}>
            {defaultOption ? (
               <DropdownTitle>{selectedOption?.label}</DropdownTitle>
            ) : (
               <DropdownTitle>{title}</DropdownTitle>
            )}
            <ChevronIcon />
         </DropdownTitleContainer>
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
   );
};

export default Dropdown;

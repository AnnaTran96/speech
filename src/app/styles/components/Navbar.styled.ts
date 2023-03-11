import styled, { css } from 'styled-components/macro';

import Dropdown from 'app/common/components/Dropdown/Dropdown';
import { rainbowTheme } from 'app/styles/Theme.styled';
import {
   DropdownOption,
   DropdownTitleContainer,
   SelectDropdown,
} from 'app/styles/components/Dropdown.styled';
import cursor from 'assets/icons/cursor-click.svg';

const baseStyles = css`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const navbarLinks = css`
   margin: 0 40px;
   text-decoration: none;
   color: ${(prop) => prop.theme.colors.text};
   font-size: 1.5em;
   cursor: url(${cursor}), auto;
`;

const dropdownStyle = css`
   font-size: 0.65em;
   margin: 0;

   ${SelectDropdown} {
      background: ${(prop) => prop.theme.colors.dropdownOption};
   }

   ${DropdownOption} {
      margin: 0;

      &:hover {
         color: ${(prop) =>
            rainbowTheme
               ? prop.theme.colors.dropdownText
               : prop.theme.colors.dropdownOption};
         background: ${(prop) => prop.theme.colors.text};
      }
   }
`;

export const NavbarContainer = styled.div`
   display: flex;
   align-items: center;
   padding: 12px;
   justify-content: space-between;
   border: 3px #000000 solid;
   border-top-left-radius: 35px;
   border-top-right-radius: 35px;
   border-bottom-left-radius: 15px;
   border-bottom-right-radius: 15px;
   background: ${(prop) => prop.theme.colors.main};
   box-shadow: 6px 7px 0px -2px #000000;
   margin: 20px;
`;

export const FirstSection = styled.div`
   ${baseStyles}
`;

export const NavbarLinksSetOne = styled.nav`
   ${baseStyles}

   * {
      ${navbarLinks}
   }
`;

export const NavbarLinksSetTwo = styled.nav`
   ${baseStyles}

   * {
      ${navbarLinks}
      margin: 0 10px;
   }
`;

export const ServicesDropdown = styled(Dropdown)`
   ${dropdownStyle}

   ${DropdownTitleContainer} {
      margin: 0;
   }

   ${SelectDropdown} {
      margin-left: 85px;
      background: ${(prop) =>
         rainbowTheme
            ? prop.theme.colors.servicesDropdown
            : prop.theme.colors.main};
   }
`;

export const ThemeDropdown = styled(Dropdown)`
   ${dropdownStyle}

   ${SelectDropdown} {
      margin-top: -55px;
      margin-left: 30px;
   }
`;

export const LanguageDropdown = styled(Dropdown)`
   ${dropdownStyle}

   ${SelectDropdown} {
      margin-top: -78px;
      margin-left: -30px;
   }
`;

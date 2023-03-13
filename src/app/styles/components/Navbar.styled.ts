import styled, { css } from 'styled-components/macro';

import Dropdown from 'app/common/components/Dropdown/Dropdown';
import Input from 'app/common/components/Input/Input';

import { rainbowTheme } from 'app/styles/Theme.styled';
import {
   DropdownOption,
   DropdownTitleContainer,
   SelectDropdown,
} from 'app/styles/components/Dropdown.styled';
import { FavouriteButton } from 'app/styles/components/FavouriteButton.styled';

import cursor from 'assets/icons/cursor-click.svg';
import deleteIcon from 'assets/icons/delete.svg';

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

   ${FavouriteButton} {
      margin: 0 25px 0 -5px;
      padding: 0;

      path {
         stroke: ${(prop) => prop.theme.colors.text};
      }
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
      margin-top: -57px;
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

export const InputField = styled(Input)`
   height: 22px;
   width: 22px;
   border-radius: 50%;
   border: 2px solid ${(prop) => prop.theme.colors.searchIcon};
   background-color: transparent;
   outline: none;
   box-sizing: border-box;
   font-size: 2em;
   font-family: inherit;
   color: transparent;
   transition: 0.5s;

   ::placeholder {
      color: ${(props) => props.theme.colors.searchIcon};
   }

   &::selection {
      color: ${(prop) => prop.theme.colors.searchSelection};
      background: ${(prop) => prop.theme.colors.collapseSearchSelection};
   }

   &:focus {
      width: 320px;
      height: 40px;
      border-radius: 100px;
      padding-left: 40px;
      background: transparent;
      font-size: 0.65em;
      color: ${(prop) => prop.theme.colors.text};
   }

   &::-webkit-search-cancel-button {
      -webkit-appearance: none;
      height: 45px;
      width: 45px;
      position: relative;
      right: 5px;
      content: url(${deleteIcon});
   }
`;

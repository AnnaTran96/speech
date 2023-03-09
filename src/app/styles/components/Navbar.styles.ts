import styled, { css } from 'styled-components';

import Dropdown from 'app/common/components/Dropdown/Dropdown';
import cursor from 'assets/icons/cursor-click.svg';

const baseStyles = css`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const navbarLinks = css`
   margin: 0 40px;
   text-decoration: none;
   color: #000000;
   font-size: 1.5em;
   cursor: url(${cursor}), auto;
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
   background-color: #ffc0cb;
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
   margin: 40px;
`;

export const ThemeDropdown = styled(Dropdown)`
   margin-top: -34px;
`;

export const LanguageDropdown = styled(Dropdown)`
   margin-top: -131px;
   margin-left: -20px;
`;

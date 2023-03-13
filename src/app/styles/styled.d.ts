import 'styled-components/macro';

declare module 'styled-components/macro' {
   export interface DefaultTheme {
      name: string;

      colors: {
         background: string;
         main: string;
         text: string;
         headerButtonOne: string;
         headerButtonTwo: string;
         headerButtonThree: string;
         translationBoxOne: string;
         translationBoxTwo: string;
         voltageIcon?: string;
         starIcon?: string;
         gameIcon?: string;
         gameScreenIcon?: string;
         alienIcon?: string;
         rainbowIconFillOne?: string;
         rainbowIconFillTwo?: string;
         rainbowIconFillThree?: string;
         rainbowIconFillFour?: string;
         rainbowIconFillFive?: string;
         rainbowIconFillSix?: string;
         chevronIcon?: string;
         searchIcon: string;
         searchSelection: string;
         collapseSearchSelection: string;
         gridLines: string;
         cardBackground: string;
         breakline: string;
         dropdownOption?: string;
         dropdownText?: string;
         servicesDropdown?: string;
      };
   }
}

// import original module declarations
import 'styled-components';
import { Theme } from 'styled-bootstrap-grid';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    name: string;
    backgroundColor: string;
    fonts: {
      raleway: string;
      openSans: string;
    };
    fontSizes: string[];
    space: string[];
    breakpoints: string[];
    base: {
      px: number;
      unit: number;
      padding: string;
      opacity: number;
    };
    border: {
      radius: number;
      color: string;
    };
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      white: string;
      text: string;
      gray: string;
      black: string;
      red: string;
      yellow: string;
      green: string;
      blue: string;
      darkGray: string;
      grayAlt: string;
      cream: string;
    };
  }
}

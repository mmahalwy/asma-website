import range from 'lodash/range';
import isNumber from 'lodash/isNumber';
import { css, DefaultTheme } from 'styled-components';
import { MediaAliases } from 'styled-bootstrap-grid';
import { defaultContainerMaxWidth } from 'styled-bootstrap-grid/dist/components/ThemeProvider/ThemeProvider';

const BASE_PX = 16;
const fonts = {
  raleway: `'Raleway', sans-serif`,
  vollkorn: `'Vollkorn', sans-serif`,
};
const primary = '#24ACD3';
const secondary = '#F39168';
const primaryLight = '#F6F8FC';
const white = '#fff';
const text = '#575656';
const gray = '#D3D3D3';
const darkGray = '#888888';
const grayAlt = '#828282';
const black = '#575656';
const red = '#e50000';
const yellow = '#F2A026';
const green = '#5E931F';
const blue = '#0085CA';
const cream = '#FFF4E6';

const borderRadius = 5;
const borderColor = '#E6E6E6';

export const styledBootstrapGridTheme = {
  gridColumns: 12,
  breakpoints: {
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
    // or you can use aliases
    // veryGiant: 1440,
    // giant: 1200,
    // desktop: 992,
    // tablet: 768,
    // phone: 576,
    // smaller: 575,
  },
  row: {
    padding: 15,
  },
  col: {
    padding: 15,
  },
  container: {
    padding: 15,
    maxWidth: {
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
      // or you can use aliases
      // veryGiant: 1141,
      // giant: 1140,
      // desktop: 960,
      // tablet: 720,
      // phone: 540,
      // smaller: 540,
    },
  },
};

const getContainerPadding = () => {
  if (isNumber(styledBootstrapGridTheme.container.padding)) {
    return styledBootstrapGridTheme.container.padding;
  }

  return 15;
};

const getContainerMaxWidth = (breakpoint: MediaAliases) => {
  if (isNumber(styledBootstrapGridTheme.container.maxWidth[breakpoint])) {
    return styledBootstrapGridTheme.container.maxWidth[breakpoint];
  }

  return defaultContainerMaxWidth[breakpoint];
};

const getRowPadding = () => {
  if (styledBootstrapGridTheme.row && isNumber(styledBootstrapGridTheme.row.padding)) {
    return styledBootstrapGridTheme.row.padding;
  }

  return 15;
};

const getColPadding = () => {
  if (styledBootstrapGridTheme.col && isNumber(styledBootstrapGridTheme.col.padding)) {
    return styledBootstrapGridTheme.col.padding;
  }

  return 15;
};

const getGridColumns = () => {
  if (styledBootstrapGridTheme && isNumber(styledBootstrapGridTheme.gridColumns)) {
    return styledBootstrapGridTheme.gridColumns;
  }

  return 12;
};

export const makeRem = (size: number) => `${size / BASE_PX}rem`;

export const theme: DefaultTheme = {
  name: 'Default',
  styledBootstrapGrid: {
    ...styledBootstrapGridTheme,
    getContainerPadding,
    getContainerMaxWidth,
    getRowPadding,
    getColPadding,
    getGridColumns,
  },
  backgroundColor: '#fff',
  fonts,
  fontSizes: [makeRem(12), makeRem(14), makeRem(16), makeRem(20), makeRem(24), makeRem(32)],
  space: [makeRem(BASE_PX * 0.25), ...range(0.5, 20, 0.5).map((number) => `${number}rem`)],
  breakpoints: Object.values(styledBootstrapGridTheme.breakpoints)
    .reverse()
    .map((a) => `${a}px`),
  base: {
    px: BASE_PX,
    unit: 1, // base font-size is 16px
    padding: '0.625rem 0.625rem',
    opacity: 0.8,
  },
  border: {
    radius: borderRadius,
    color: borderColor,
  },
  colors: {
    primary,
    primaryLight,
    secondary,
    white,
    text,
    gray,
    darkGray,
    grayAlt,
    black,
    red,
    yellow,
    green,
    blue,
    cream,
  },
};

export const resetButton = css`
  appearance: none;
  background: transparent;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  border: 0;
  user-select: auto;
  text-decoration: none;
  font-size: inherit;
  vertical-align: middle;
  display: inline-block;
`;

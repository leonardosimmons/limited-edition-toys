import { createTheme } from '@material-ui/core';
import { Color } from 'utils/keys';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobileSm: true;
    mobileMd: true;
    mobileLg: true;
    tabletSm: true;
    tabletMd: true;
    tabletLg: true;
    desktopSm: true;
    desktopMd: true;
    desktopLg: true;
  }
}

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {}

  interface ThemeOptions {}
}

export const main = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobileSm: 0,
      mobileMd: 368,
      mobileLg: 500,
      tabletSm: 760,
      tabletMd: 900,
      tabletLg: 1020,
      desktopSm: 1200,
      desktopMd: 1536,
      desktopLg: 2160,
    },
  },
  palette: {
    primary: {
      main: Color.PRIMARY,
    },
    secondary: {
      main: Color.SECONDARY,
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});

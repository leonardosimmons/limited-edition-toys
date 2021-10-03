import { createTheme } from "@material-ui/core";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    mobileSm: true;
    mobileMd: true;
    mobileLg: true;
    mobileXl: true;
    desktopSm: true;
    desktopMd: true;
    desktopLg: true;
    desktopXl: true;
  }
}

export const main = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 760,
      lg: 1200,
      xl: 1536,
      xxl: 2160,
      mobileSm: 368,
      mobileMd: 500,
      mobileLg: 760,
      mobileXl: 900,
      desktopSm: 1020,
      desktopMd: 1200,
      desktopLg: 1536,
      desktopXl: 2160,
    },
  },
});

export const dark = createTheme({
  ...main,
});

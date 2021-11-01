import React from 'react';
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
  interface Theme {
    custom: {
      boxShadow: {
        card: React.CSSProperties['boxShadow'];
      };
      loading: {
        height: React.CSSProperties['height'];
        display: React.CSSProperties['display'];
        flexDirection: React.CSSProperties['flexDirection'];
        justifyContent: React.CSSProperties['justifyContent'];
        alignItems: React.CSSProperties['alignItems'];
        margin: React.CSSProperties['margin'];
        padding: React.CSSProperties['padding'];
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      boxShadow?: {
        card?: React.CSSProperties['boxShadow'];
      };
      loading?: {
        height?: React.CSSProperties['height'];
        display?: React.CSSProperties['display'];
        flexDirection?: React.CSSProperties['flexDirection'];
        justifyContent?: React.CSSProperties['justifyContent'];
        alignItems?: React.CSSProperties['alignItems'];
        margin?: React.CSSProperties['margin'];
        padding?: React.CSSProperties['padding'];
      };
    };
  }
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

  custom: {
    boxShadow: {
      card: 'rgba(189, 189, 189, 0.4) 0px 2px 4px, rgba(189, 189, 189, 0.3) 0px 7px 13px -3px, rgba(189, 189, 189, 0.2) 0px -3px 0px inset',
    },
    loading: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      padding: '1rem',
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

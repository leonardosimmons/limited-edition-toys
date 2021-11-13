import React from 'react';
import type { PaletteColor } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Color } from 'utils/keys';

declare module '@mui/material/styles' {
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
  interface Theme {
    custom: {
      actions: {
        clicked: {
          transform: React.CSSProperties['transform'];
          boxShadow: React.CSSProperties['boxShadow'];
        };
      };
      center: {
        display: React.CSSProperties['display'];
        justifyCenter: React.CSSProperties['justifyContent'];
        alignItems: React.CSSProperties['alignItems'];
      };
      centerColumn: {
        display: React.CSSProperties['display'];
        flexDirection: React.CSSProperties['flexDirection'];
        justifyCenter: React.CSSProperties['justifyContent'];
        alignItems: React.CSSProperties['alignItems'];
      };
      palette: {
        tertiary: PaletteColor;
        white: React.CSSProperties['color'];
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
      shadow: {
        card: {
          cart: {
            boxShadow: React.CSSProperties['boxShadow'];
          };
          display: {
            boxShadow: React.CSSProperties['boxShadow'];
          };
          highlight: {
            boxShadow: React.CSSProperties['boxShadow'];
          };
        };
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      actions?: {
        clicked?: {
          transform?: React.CSSProperties['transform'];
          boxShadow?: React.CSSProperties['boxShadow'];
        };
      };
      center?: {
        display?: React.CSSProperties['display'];
        justifyContent?: React.CSSProperties['justifyContent'];
        alignItems?: React.CSSProperties['alignItems'];
      };
      centerColumn?: {
        display?: React.CSSProperties['display'];
        flexDirection?: React.CSSProperties['flexDirection'];
        justifyContent?: React.CSSProperties['justifyContent'];
        alignItems?: React.CSSProperties['alignItems'];
      };
      palette?: {
        tertiary?: PaletteColor;
        white?: React.CSSProperties['color'];
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
      shadow: {
        card?: {
          cart?: {
            boxShadow?: React.CSSProperties['boxShadow'];
          };
          display?: {
            boxShadow?: React.CSSProperties['boxShadow'];
          };
          highlight?: {
            boxShadow?: React.CSSProperties['boxShadow'];
          };
        };
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
    actions: {
      clicked: {
        transform: 'translateY(2px)',
        boxShadow:
          'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
      },
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
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
    palette: {
      tertiary: {
        light: '#c9cbe6',
        main: '#b6add6',
        dark: '#7a6eb2',
        contrastText: '#8553FE',
      },
      white: '#ffffff',
    },
    shadow: {
      card: {
        cart: {
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
        },
        display: {
          boxShadow: `rgba(189, 189, 189, 0.7) 0px 2px 4px, rgba(189, 189, 189, 0.6) 0px 7px 13px -3px, rgba(189, 189, 189, 0.5) 0px -3px 0px inset`,
        },
        highlight: {
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        },
      },
    },
  },

  palette: {
    primary: {
      main: Color.PRIMARY,
    },
    secondary: {
      main: '#f7da67',
    },
  },

  typography: {
    htmlFontSize: 10,
  },
});

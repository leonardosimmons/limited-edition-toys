import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import { Images } from 'utils/keys';

export const useProductHeaderStyles = makeStyles(
  ({ breakpoints, palette }: Theme) =>
    createStyles({
      mainContainer: {
        width: '100%',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Images.TOP_CLOUDS_LIGHT})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 85%',
        [breakpoints.up('mobileMd')]: {
          height: '165px',
          backgroundPosition: '0 100%',
        },
        [breakpoints.up('mobileLg')]: {
          height: '195px',
        },
        [breakpoints.up('mobileLg')]: {
          height: '225px',
        },
        [breakpoints.up('tabletMd')]: {
          height: '275px',
          backgroundPosition: '0 120%',
          backgroundRepeat: 'repeat-x',
        },
        [breakpoints.up('desktopSm')]: {
          height: '275px',
          backgroundSize: '70%',
          backgroundPosition: '20% 80%',
        },
        [breakpoints.up('desktopMd')]: {
          height: '350px',
          backgroundSize: '55%',
        },
        [breakpoints.up('desktopLg')]: {
          height: '350px',
          backgroundSize: '35%',
        },
      },

      title: {
        fontFamily: 'Monofett, sans-serif',
        fontSize: '2.25rem',
        fontWeight: 600,
        letterSpacing: 6,
        textAlign: 'center',
        color: palette.secondary.dark,
        [breakpoints.up('mobileMd')]: {
          fontSize: '3rem',
          marginBottom: '50px',
        },
        [breakpoints.up('tabletMd')]: {
          fontSize: '5rem',
          marginBottom: '80px',
        },
        [breakpoints.up('desktopSm')]: {
          fontSize: '5rem',
          marginBottom: '100px',
        },
        [breakpoints.up('desktopMd')]: {
          fontSize: '7rem',
          marginBottom: '120px',
        },
      },
    }),
);

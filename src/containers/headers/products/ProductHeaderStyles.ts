import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import { Images } from 'utils/keys';

export const useProductHeaderStyles = makeStyles(({ breakpoints }: Theme) =>
  createStyles({
    mainContainer: {
      width: '100%',
      height: '150px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${Images.TOP_CLOUDS_LIGHT})`,
      backgroundSize: 'contain',
      [breakpoints.up('desktopSm')]: {
        height: '300px',
        backgroundSize: '50%',
        backgroundPosition: '20% 80%',
      },
      [breakpoints.up('desktopMd')]: {
        backgroundSize: '40%',
      },
      [breakpoints.up('desktopLg')]: {
        backgroundSize: '25%',
      },
    },

    title: {
      fontSize: '2rem',
      fontWeight: 600,
      textAlign: 'center',
      [breakpoints.up('desktopSm')]: {
        fontSize: '5rem',
        marginBottom: '100px',
      },
    },
  }),
);

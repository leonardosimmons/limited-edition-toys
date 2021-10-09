import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

export const useSearchBarStyles = makeStyles(({ breakpoints }: Theme) =>
  createStyles({
    searchBar: {
      width: '100%',
      maxWidth: '800px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      transform: 'scale(.7)',
      borderRadius: '.5rem',
      [breakpoints.up('desktopSm')]: {
        marginTop: '1rem',
      },
    },

    searchInput: {
      flex: 1,
    },

    icon: {
      flex: '0 1 10%',
      padding: '10px',
    },

    divider: {
      height: '30px',
      width: '2px',
      marginRight: '30px',
    },
  }),
);

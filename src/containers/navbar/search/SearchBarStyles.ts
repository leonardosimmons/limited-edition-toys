import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

export const useSearchBarStyles = makeStyles(
  ({ breakpoints, palette, zIndex }: Theme) =>
    createStyles({
      menu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: zIndex.modal + 2,
      },

      menuItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 0,
        opacity: 0.7,
        fontSize: '1rem',
        '&:hover': {
          opacity: 1,
        },
        [breakpoints.up(600)]: {
          padding: '.5rem',
        },
      },

      menuTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '14rem',
        marginBottom: '.5rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        [breakpoints.up(600)]: {
          marginTop: '10rem',
        },
      },

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

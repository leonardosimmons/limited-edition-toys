import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

export const useMobileMenuStyles = makeStyles(
  ({ breakpoints, mixins, palette, zIndex }: Theme) =>
    createStyles({
      copyright: {
        margin: '0 auto',
        fontSize: '.8rem',
        color: palette.grey[900],
      },

      list: {
        flex: 1,
        marginTop: '2rem',
      },

      listText: {
        fontSize: '1rem',
      },

      menuButtonContainer: {
        marginLeft: 'auto',
        padding: 2,
        transform: 'scale(0.7) !important',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        [breakpoints.up('tabletSm')]: {
          padding: 8,
          transform: 'scale(.8) !important',
        },
        [breakpoints.up('tabletLg')]: {
          padding: 8,
          transform: 'scale(.9) !important',
        },
      },

      menuButton: {
        height: '40px',
        width: '40px',
      },

      menuDrawer: {
        zIndex: zIndex.modal + 1,
        backgroundColor: 'white',
        width: '200px',
      },

      menuContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
      },

      navbarSpacer: {
        ...mixins.toolbar,
      },

      promoBox: {
        position: 'relative',
        flex: '0 1 15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
      },
    }),
);

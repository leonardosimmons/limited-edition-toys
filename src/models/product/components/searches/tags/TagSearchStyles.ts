import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

export const useTagSearchStyles = makeStyles(
  ({ breakpoints, palette, zIndex }: Theme) =>
    createStyles({
      divider: {
        height: '30px',
        width: '2px',
        marginRight: '10px',
        [breakpoints.up('mobileLg')]: {
          marginRight: '20px',
        },
      },

      icon: {
        flex: '0 1 10%',
        padding: '10px',
        '&:active': {
          transition: 'all .4s',
          transform: 'translateY(-1.5px)',
          backgroundColor: palette.grey[500],
        },
      },

      menuIcon: {
        '&:focus': {
          backgroundColor: palette.grey[300],
        },
      },

      searchIcon: {
        borderRadius: '0 .5rem .5rem 0',
        backgroundColor: palette.grey[300],
      },

      menu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: zIndex.modal + 2,
        // paddingTop: '12rem',
        // [breakpoints.up('tabletSm')]: {
        //   paddingTop: '10rem',
        // },
      },

      menuItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: '20px',
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        //marginTop: '14rem',
        marginBottom: '.5rem',
        marginLeft: '20px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        [breakpoints.up(600)]: {
          //marginTop: '10rem',
        },
      },

      searchBar: {
        width: '125%',
        maxWidth: '800px',
        display: 'flex',
        justifyContent: 'center',
        justifySelf: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        transform: 'scale(.7)',
        borderRadius: '.5rem',
        border: `.5px solid ${palette.grey[400]}`,
        [breakpoints.up('tabletSm')]: {
          marginTop: '.5rem',
          width: '100%',
        },
        [breakpoints.up('desktopMd')]: {
          marginTop: '1rem',
          marginBottom: '.35rem',
        },
      },

      searchInput: {
        flex: 1,
      },

      tabDivider: {
        width: '80%',
        marginRight: 'auto',
        marginLeft: '10px',
      },
    }),
);

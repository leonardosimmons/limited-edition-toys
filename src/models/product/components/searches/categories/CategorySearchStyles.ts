import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

export const useCategorySearchStyles = makeStyles(
  ({ breakpoints, zIndex }: Theme) =>
    createStyles({
      mainContainer: {
        marginTop: '10px',
        padding: '0 .5rem',
        [breakpoints.up('desktopMd')]: {
          marginTop: '30px',
        },
      },

      menu: {
        height: '300px',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: zIndex.modal + 2,
        overflow: 'hidden',
      },

      menuContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '0 2rem',
        '&  > div.MuiContainer-root': {
          display: 'flex',
          flexDirection: 'row',
        },
      },

      tabs: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& div > div.MuiTabs-flexContainer': {
          justifyContent: 'center',
          alignItems: 'center',
        },
      },

      tab: {
        minWidth: 0,
        padding: 0,
        margin: '0 .5rem',
      },

      tabWrapper: {
        fontSize: '.9rem',
        [breakpoints.up('desktopMd')]: {
          margin: '0 1rem',
          fontSize: '1rem',
        },
      },

      listContainer: {
        height: '100%',
        flex: '0 1 25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },

      listItem: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        margin: 0,
      },

      listItemText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
      },

      productContainer: {
        flex: '1',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      productContainerRoot: {
        display: 'flex',
        flexDirection: 'row',
      },

      productBox: {
        height: '100%',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },

      productImage: {},

      productInfoBox: {},
    }),
);

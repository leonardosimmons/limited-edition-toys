import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import { Color } from 'utils/keys';

export const useProductDisplayCardStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    displayAction: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
      padding: '.25rem 1rem',
      '& > div:nth-child(1)': {
        flex: 1,
        margin: '0 1rem',
      },
      '& > div:nth-child(2)': {
        flex: 1,
        width: '50px',
        backgroundColor: palette.secondary.main,
        borderRadius: '10px',
        '& > button.MuiButton-root': {
          minWidth: 0,
          width: '13ch',
        },
        '& > button span.MuiButton-label': {
          fontSize: '1rem',
        },
      },
    },

    displayInfo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      '& > *': {
        padding: '0 20px',
      },
      '& div h6.MuiTypography-h6': {
        fontSize: '1.2rem',
        margin: '0 2px',
      },
      '& div span.MuiTypography-caption': {
        fontSize: '1rem',
        margin: '2px 2px',
      },
      '& div svg.MuiSvgIcon-root': {
        fontSize: '1.5rem',
      },
    },

    gridItem: {
      padding: 0,
    },

    imageBox: {
      position: 'relative',
      width: '335px',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px auto',
      borderRadius: '10px',
    },

    image: {
      position: 'absolute',
      margin: '0 auto',
      borderRadius: '10px',
    },

    mainContainer: {
      width: '375px',
      height: '475px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: `rgba(189, 189, 189, 0.4) 0px 2px 4px, rgba(189, 189, 189, 0.3) 0px 7px 13px -3px, rgba(189, 189, 189, 0.2) 0px -3px 0px inset`,
      '& > div.MuiCircularProgress-root': {
        marginBottom: '20px',
      },
    },

    progress: {},
  }),
);

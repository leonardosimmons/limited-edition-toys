import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import { Color } from 'utils/keys';

export const useProductDisplayCardStyles = makeStyles(
  ({ breakpoints, palette }: Theme) =>
    createStyles({
      displayAction: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '.25rem 1rem',
        [breakpoints.up('mobileMd')]: {
          flexDirection: 'row',
        },
        '& > div:nth-child(1)': {
          flex: 1,
          alignSelf: 'flex-start',
          margin: '0 1rem',
          marginBottom: '0.25rem',
          fontSize: '1rem',
          [breakpoints.up('mobileMd')]: {
            alignSelf: 'center',
          },
          [breakpoints.up('tabletSm')]: {
            fontSize: '1rem',
          },
        },
        '& > div:nth-child(2)': {
          flex: 1,
          width: '90%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: palette.secondary.main,
          borderRadius: '10px',
          '& > button.MuiButton-root': {
            minWidth: 0,
            width: '13ch',
          },
          '& > button span.MuiButton-label': {
            fontSize: '.8rem',
            textAlign: 'center',
            [breakpoints.up('tabletSm')]: {
              fontSize: '1rem',
            },
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
          transition: 'all .5s',
          '&:hover': {
            cursor: 'pointer',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(2px)',
          },
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
        width: '250px',
        height: '155px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px auto',
        borderRadius: '10px',
        [breakpoints.up('mobileMd')]: {
          height: '185px',
          width: '300px',
        },
        [breakpoints.up('tabletSm')]: {
          width: '300px',
          height: '285px',
        },
      },

      image: {
        position: 'absolute',
        margin: '0 auto',
        borderRadius: '10px',
        transition: 'all .5s',
        '&:hover': {
          cursor: 'pointer',
          transform: 'translateY(-2px)',
        },
        '&:active': {
          transform: 'translateY(2px)',
          boxShadow:
            'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
        },
      },

      mainContainer: {
        width: '335px',
        height: '375px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '100px',
        boxShadow: `rgba(189, 189, 189, 0.7) 0px 2px 4px, rgba(189, 189, 189, 0.6) 0px 7px 13px -3px, rgba(189, 189, 189, 0.5) 0px -3px 0px inset`,
        '& > div.MuiCircularProgress-root': {
          marginBottom: '20px',
        },
        '&:hover': {
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        },
        [breakpoints.up('tabletSm')]: {
          width: '355px',
          height: '475px',
        },
      },

      progress: {},
    }),
);

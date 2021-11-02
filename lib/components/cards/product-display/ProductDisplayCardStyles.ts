import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

export const useProductDisplayCardStyles = makeStyles(
  ({ breakpoints, custom, palette }: Theme) =>
    createStyles({
      displayAction: {
        marginBottom: '20px',
        padding: '.25rem 1rem',
        ...custom.centerColumn,
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

      displayCard: {
        marginBottom: '40px',
        '& > div.MuiCircularProgress-root': {
          marginBottom: '20px',
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
        margin: '10px auto',
        borderRadius: '10px',
        ...custom.centerColumn,
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
          ...custom.actions.clicked,
        },
      },
    }),
);

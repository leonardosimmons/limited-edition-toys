import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Container, { ContainerProps } from '@mui/material/Container';

export const CompletedMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    height: '100%',
    width: '100%',
    ...theme.custom.centerColumn,
    '& > p.MuiTypography-body1': {
      width: '900px',
      ...theme.custom.center,
      padding: '4.5rem 3rem 6rem',
      textAlign: 'center'
    }
  }),
);

export const CompletedTopBanner = styled(Box)<BoxProps>(({ theme }) => ({
  height: '85px',
  width: '100%',
  backgroundColor: 'green',
  ...theme.custom.center,
  '& > svg.MuiSvgIcon-root': {
    height: '.8em',
    width: '.8em',
    color: 'white',
    [theme.breakpoints.up('mobileMd')]: {
      // height: '1em',
      // width: '1em',
      marginBottom: '5px',
    },
  },
  '& > span.MuiTypography-caption': {
    marginLeft: '10px',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'Jost',
    fontWeight: '300',
    [theme.breakpoints.up('mobileMd')]: {},
  },
}));

export const ConfirmationBanner = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100px',
  width: '85%',
  borderBottom: `2.5px solid ${theme.palette.grey[200]}`,
  ...theme.custom.center,
  '& > h1.MuiTypography-h1': {
    fontSize: '3.25rem',
    fontWeight: 200,
    color: theme.palette.grey[700]
  },
}));

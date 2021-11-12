import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import Container, { ContainerProps } from '@mui/material/Container';

interface StyledSummaryInfoDisplayGridItemProps extends GridProps {
  bold?: boolean;
}

export const SummaryMainContainer = styled(Container)<ContainerProps>(
  ({ theme }) => ({
    padding: '24px',
    backgroundColor: theme.custom.palette.white,
    [theme.breakpoints.up('mobileLg')]: {
      padding: '24px 36px',
    },
    [theme.breakpoints.up('tabletMd')]: {
      height: '100%',
    },
  }),
);

export const SummaryInfoDisplay = styled(Grid)<GridProps>(({ theme }) => ({}));

export const SummaryInfoDisplayGridItem = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'bold',
})<StyledSummaryInfoDisplayGridItemProps>(({ bold }) => ({
  '& > div.MuiGrid-root': {
    '&:nth-of-type(1)': {
      '& > h3.MuiTypography-h3': {
        letterSpacing: 1,
        fontSize: '1rem',
        fontWeight: '500',
      },
    },
    '&:nth-of-type(2)': {
      display: 'flex',
      justifyContent: 'flex-end',
      '& > p.MuiTypography-body1': {
        letterSpacing: 1,
        fontSize: '1rem',
        fontWeight: '500',
      },
    },
  },
  ...(bold && {
    '& > div.MuiGrid-root': {
      marginTop: '10px',
      '&:nth-of-type(1)': {
        '& > h3.MuiTypography-h3': {
          letterSpacing: 1,
          fontFamily: 'Jost',
          fontSize: '1.3rem',
          fontWeight: '600',
        },
      },
      '&:nth-of-type(2)': {
        display: 'flex',
        justifyContent: 'flex-end',
        '& > p.MuiTypography-body1': {
          letterSpacing: 1,
          fontSize: '1.3rem',
          fontWeight: 'bold',
        },
      },
    },
  }),
}));

export const SummaryCheckoutAction = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100%',
  width: '100%',
  marginTop: '15px',
  marginBottom: '40px',
}));

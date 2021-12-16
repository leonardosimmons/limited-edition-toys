import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

interface StyledBoxProps extends BoxProps {
  discounted?: boolean;
  showPromoName?: boolean;
}

export const CartCardInfo = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'discounted' && prop !== 'showPromoName',
})<StyledBoxProps>(({ discounted, showPromoName, theme }) => ({
  display: 'flex',
  width: '100%',
  padding: '1rem',
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  '& > div.MuiFormControl-root': {
    '& > p.MuiFormHelperText-root': {
      margin: 0,
    },
    '& > div.MuiOutlinedInput-root': {
      fontSize: '1rem',
      width: '75px',
      '& > div': {
        padding: '.75rem 1rem',
      },
    },
  },
  '& > div.cartInfo-priceBox': {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > span': {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      ...(discounted && {
        '&:nth-of-type(1)': {
          fontSize: '1.6rem',
          color: 'red',
        },
        '&:nth-of-type(2)': {
          marginLeft: '10px',
          textDecoration: 'line-through solid black',
        },
      }),
      ...(showPromoName && {
        '&:nth-of-type(1)': {
          marginLeft: '15px',
          padding: '0 15px',
          fontSize: '1rem',
          color: 'red',
          textAlign: 'center',
          [theme.breakpoints.up('tabletMd')]: {
            marginLeft: 0,
            marginRight: '10px',
            padding: 0,
            textAlign: 'right',
          },
        },
        '&:nth-of-type(2)': {
          marginLeft: '5px',
        },
      }),
    },
  },
}));

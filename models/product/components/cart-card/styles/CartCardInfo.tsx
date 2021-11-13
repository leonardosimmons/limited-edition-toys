import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

export const CartCardInfo = styled(Box)<BoxProps>(({ theme }) => ({
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
      marginLeft: 'auto',
      fontSize: '1.3rem',
      fontWeight: 'bold',
    },
  },
}));

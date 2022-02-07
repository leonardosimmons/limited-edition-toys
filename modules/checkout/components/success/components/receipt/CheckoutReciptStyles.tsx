import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';

interface ReceiptItemProps extends BoxProps {
  caption?: boolean;
  lineItem?: boolean;
  shipping?: boolean;
  subtotal?: boolean;
  total?: boolean;
}

interface ReceiptSpacerProps extends BoxProps {
  space?: string;
}

export const CheckoutReceiptWrapper = styled(Box)<BoxProps>(
  ({ theme }) => ({
    width: '100%'
  }),
);

export const CheckoutReceiptItem = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'caption' &&
    prop !== 'lineItem' &&
    prop !== 'subtotal' &&
    prop !== 'total',
})<ReceiptItemProps>(({ caption, lineItem, shipping, subtotal, total, theme }) => ({
  display: 'flex',
  padding: '2rem 0',
  '& > p.MuiTypography-body1': {
    fontSize: '1.2rem',
    [theme.breakpoints.up('desktopMd')]: {
      fontSize: '1.4rem'
    },
  },
  '& > p.MuiTypography-body1:nth-of-type(1)': {
    flex: 1,
  },
  '& > p.MuiTypography-body1:nth-of-type(2)': {
    flex: '0 1 20%',
    textAlign: 'right'
  },
  ...(lineItem && {

  }),
  ...(shipping && {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    color: theme.palette.grey[700]
  }),
  ...(subtotal && {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    color: theme.palette.grey[700]
  }),
  ...(total && {
    marginBottom: '4rem',
    '& > p.MuiTypography-root': {
      fontWeight: 'bold'
    }
  })
}));

export const CheckoutSpacer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'space',
})<ReceiptSpacerProps>(({ space }) => ({
  height: space
}));
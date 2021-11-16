import { styled } from '@mui/material/styles';

import TableRow, { TableRowProps } from '@mui/material/TableRow';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import Typography, { TypographyProps } from '@mui/material/Typography';

export const CheckoutSummaryHeading = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    fontSize: '1.8rem',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    margin: '40px auto 28px',
    [theme.breakpoints.up('tabletLg')]: {
      margin: '42.5px 0 25px',
    },
  }),
);

export const CheckoutSummaryTableRow = styled(TableRow)<TableRowProps>(
  ({ theme }) => ({
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    '& td, & th': {
      '& > button.MuiButtonBase-root': {
        padding: '.5rem 0',
        [theme.breakpoints.up('desktopSm')]: {
          padding: '.25rem 1rem',
        },
        '&:active': {
          ...theme.custom.actions.clicked,
        },
        '& > svg.MuiSvgIcon-root': {
          fontSize: '1.6rem',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
  }),
);

export const CheckoutSummaryTableCell = styled(TableCell)<TableCellProps>(
  ({ theme }) => ({
    padding: '.5rem',
    fontSize: '1rem',
    backgroundColor: theme.palette.grey[100],
    '& div.MuiFormControl-root > div.MuiOutlinedInput-root': {
      transform: 'scale(.8)',
      fontSize: '1rem',
    },
  }),
);

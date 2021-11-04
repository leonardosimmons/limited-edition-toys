import { styled } from '@mui/material/styles';

import Divider, { DividerProps } from '@mui/material/Divider';

export const DesktopNavbarDivider = styled(Divider)<DividerProps>(
  ({ theme }) => ({
    height: '60%',
    backgroundColor: theme.palette.grey[500],
    margin: 'auto 10px',
    [theme.breakpoints.up('desktopSm')]: {
      margin: 'auto 10px',
    },
    [theme.breakpoints.up('desktopLg')]: {
      margin: 'auto 20px',
    },
  }),
);

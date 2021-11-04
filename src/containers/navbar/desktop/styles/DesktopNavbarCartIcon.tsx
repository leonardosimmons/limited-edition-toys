import { styled } from '@mui/material/styles';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export const DesktopNavbarCartIcon = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    marginLeft: '10px',
    [theme.breakpoints.up('desktopSm')]: {
      marginLeft: '5px',
    },
    [theme.breakpoints.up('desktopMd')]: {
      margin: '0 10px',
    },
    [theme.breakpoints.up('desktopMd')]: {
      margin: '0 20px',
    },
  }),
);

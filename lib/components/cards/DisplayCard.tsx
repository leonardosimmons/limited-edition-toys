import { styled } from '@mui/material/styles';

import Paper, { PaperProps } from '@mui/material/Paper';

const DisplayCard = styled(Paper)<PaperProps>(({ theme }) => ({
  width: '345px',
  height: '475px',
  ...theme.custom?.centerColumn,
  '&.MuiPaper-root': {
    border: '1px solid rgba(189,189, 189, 0.4)',
    ...theme.custom?.shadow.card.display,
    '&:hover': {
      ...theme.custom?.shadow.card.highlight,
    },
  },
  [theme.breakpoints.up('mobileMd')]: {
    height: '400px',
  },
  [theme.breakpoints.up('tabletSm')]: {
    width: '375px',
    height: '490px',
  },
  [theme.breakpoints.up('desktopSm')]: {
    padding: '5px',
  },
}));

export default DisplayCard;

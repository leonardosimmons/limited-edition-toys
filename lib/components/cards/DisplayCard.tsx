import { styled } from '@mui/material/styles';

import Paper, { PaperProps } from '@mui/material/Paper';

const DisplayCard = styled(Paper)<PaperProps>(({ theme }) => ({
  width: '335px',
  height: '390px',
  ...theme.custom?.centerColumn,
  '&.MuiPaper-root': {
    ...theme.custom?.shadow.card.display,
    '&:hover': {
      ...theme.custom?.shadow.card.highlight,
    },
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

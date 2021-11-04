import { styled } from '@mui/material/styles';
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from '@mui/material/SwipeableDrawer';

const MobileDrawer = styled(SwipeableDrawer)<SwipeableDrawerProps>(
  ({ theme }) => ({
    '& > div.MuiPaper-root': {
      zIndex: theme.zIndex.modal + 1,
      backgroundColor: 'white',
      width: '200px',
    },
  }),
);

export default MobileDrawer;

import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

const MobileMenuTab = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  marginLeft: 'auto',
  padding: 2,
  transform: 'scale(0.7) !important',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.up('tabletSm')]: {
    padding: 8,
    transform: 'scale(.8) !important',
  },
  [theme.breakpoints.up('tabletLg')]: {
    padding: 8,
    transform: 'scale(.9) !important',
  },
  '& > span.MuiBadge-root > svg.MuiSvgIcon-root': {
    height: '40px',
    width: '40px',
    [theme.breakpoints.up('mobileLg')]: {
      margin: '0 .25rem',
    },
    [theme.breakpoints.up('tabletMd')]: {
      margin: '0 .5rem',
    },
    '&:active': {
      ...theme.custom.actions.clicked,
    },
  },
  '& > span.MuiBadge-root > span.MuiBadge-badge ': {
    color: 'white',
    backgroundColor: theme.custom.palette.tertiary.dark,
  },
}));

export default MobileMenuTab;

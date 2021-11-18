import { styled } from '@mui/material/styles';

import Paper, { PaperProps } from '@mui/material/Paper';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';

const CategoryBar = styled(Paper)<PaperProps>(({ theme }) => ({
  marginTop: '10px',
  padding: '0 .5rem',
  [theme.breakpoints.up('desktopMd')]: {
    marginTop: '30px',
  },
  '& div.MuiTabs-root': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& div > div.MuiTabs-flexContainer': {
      justifyContent: 'center',
      alignItems: 'center',
      '& > a.MuiTab-root': {
        minWidth: 0,
        padding: 0,
        fontSize: '.9rem',
        [theme.breakpoints.up('desktopMd')]: {
          padding: '0 1rem',
          fontSize: '1rem',
        },
      },
    },
  },
}));

export default CategoryBar;

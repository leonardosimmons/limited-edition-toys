import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';
import Container, { ContainerProps } from '@mui/material/Container';

export const CategoryDisplayGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.up('mobileMd')]: {
    marginTop: '2rem',
  },
  '& > div.MuiGrid-root': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
}));

export const CategoryMainContainer = styled(Container)<ContainerProps>(() => ({
  flex: 1,
  width: '100%',
  maxWidth: '1850px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  marginBottom: '100px',
}));

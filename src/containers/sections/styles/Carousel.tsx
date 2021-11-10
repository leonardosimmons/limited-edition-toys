import { styled } from '@mui/material/styles';

import Paper, { PaperProps } from '@mui/material/Paper';

export const CarouselImage = styled(Paper)<PaperProps>(({ theme }) => ({
  height: '300px',
  width: '80%',
}));

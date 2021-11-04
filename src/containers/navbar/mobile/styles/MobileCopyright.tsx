import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

const MobileCopyright = styled(Typography)<TypographyProps>(({ theme }) => ({
  margin: '0 auto',
  fontSize: '.8rem',
  color: theme.palette.grey[900],
}));

export default MobileCopyright;

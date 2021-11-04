import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

const MobilePromotionalBox = styled(Box)<BoxProps>(() => ({
  position: 'relative',
  flex: '0 1 15%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
}));

export default MobilePromotionalBox;

import { styled } from '@mui/material/styles';

import Container, { ContainerProps } from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Divider, { DividerProps } from '@mui/material/Divider';
import { Images } from 'utils/keys';

interface StyledContainerProps extends ContainerProps {
  background?: boolean;
}

interface StyledDividerProps extends DividerProps {
  primary?: boolean;
}

export const SectionWrapper = styled(Container, {
  shouldForwardProp: (prop) => prop !== 'background',
})<StyledContainerProps>(({ background, theme }) => ({
  ...theme.custom.centerColumn,
  marginTop: '80px',
  ...(background && {
    backgroundImage: `url(${Images.MIDDLE_CLOUDS})`,
    backgroundSize: 'contain',
  }),
}));

export const SectionTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    marginBottom: '10px',
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    [theme.breakpoints.up('mobileMd')]: {
      width: '90%',
      fontSize: '2.25rem',
    },
    [theme.breakpoints.up('tabletSm')]: {
      fontSize: '2.75rem',
    },
    [theme.breakpoints.up('desktopSm')]: {
      fontSize: '3.5rem',
    },
  }),
);

export const SectionDivider = styled(Divider, {
  shouldForwardProp: (prop) => prop !== 'primary',
})<StyledDividerProps>(({ primary, theme }) => ({
  height: '2.5px',
  width: '350px',
  backgroundColor: 'white',
  ...(primary && {
    height: '5px',
    backgroundColor: theme.palette.primary.main,
  }),
}));

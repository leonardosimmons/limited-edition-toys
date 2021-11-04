import React from 'react';

import { styled } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const LoadSpinner = styled(Box)<BoxProps>(({ theme }) => ({
  ...theme.custom?.loading,
  '& > span.MuiCircularProgress-root': {
    marginBottom: '20px',
  },
}));

type Props = {
  customColor?: boolean;
};

const CircleLoadSpinner: React.FunctionComponent<Props> = ({
  customColor,
}): JSX.Element => {
  return (
    <LoadSpinner>
      <CircularProgress color={(customColor && 'inherit') || 'secondary'} />
      <div>Loading...</div>
    </LoadSpinner>
  );
};

export default CircleLoadSpinner;

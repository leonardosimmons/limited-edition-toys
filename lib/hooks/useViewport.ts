import React from 'react';
import { useAppDispatch } from 'src/redux';
import { setViewportType } from 'src/redux/models/ui';

import { useTheme } from '@mui/material/styles';
import { Breakpoint } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * [Material-ui]
 * Specifies the user's current viewport
 * @param breakpoint
 */
export function useViewport(breakpoint?: number | Breakpoint) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const mobile = useMediaQuery(theme.breakpoints.down(breakpoint ?? 'md'));

  React.useEffect(() => {
    if (mobile) dispatch(setViewportType('mobile'));
    else dispatch(setViewportType('desktop'));
  }, [mobile]);
}

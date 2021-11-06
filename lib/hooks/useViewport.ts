import React from 'react';
import { useAppDispatch } from 'src/redux';

import { setViewportType } from 'src/redux/models/ui';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Breakpoint, useTheme } from '@mui/material/styles';

/**
 * [Material-ui]
 * Specifies the user's current viewport
 * @param breakpoint
 */
export function useViewport(breakpoint?: string | Breakpoint) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const mobile = useMediaQuery(theme.breakpoints.down('tabletMd'));
  const tablet = useMediaQuery(
    theme.breakpoints.between('tabletMd', 'desktopSm'),
  );
  const desktop = useMediaQuery(theme.breakpoints.up('desktopSm'));
  const custom = useMediaQuery(
    typeof breakpoint === 'string'
      ? breakpoint
      : theme.breakpoints.up(breakpoint || 0),
  );

  React.useEffect(() => {
    if (mobile) dispatch(setViewportType('mobile'));
    else if (tablet) dispatch(setViewportType('tablet'));
    else if (desktop) dispatch(setViewportType('desktop'));
  }, [mobile, tablet, desktop]);

  return {
    isValid: custom,
  };
}

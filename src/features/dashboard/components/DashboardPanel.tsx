import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  index: number;
  value: number;
};

const DashboardPanel: React.FunctionComponent<Props> = ({
  children,
  index,
  value,
}): JSX.Element => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dashboard-panel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
      style={{ flex: 1, height: '100%' }}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default DashboardPanel;
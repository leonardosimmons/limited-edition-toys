import React from 'react';

import Box from '@mui/material/Box';

type Props = {
  name: string;
};

const BasePanel: React.FunctionComponent<Props> = ({
  children,
  name,
}): JSX.Element => {
  return (
    <div
      role="tabpanel"
      id={`dashboard-panel-${name}`}
      aria-labelledby={`dashboard-tab-${name}`}
      style={{ flex: 1, height: '100%' }}>
      <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'flex-start', padding: 3 }}>
        {children}
      </Box>
    </div>
  );
};

export default BasePanel;
import React from 'react';

import Image from 'next/image';
import Box from '@mui/material/Box';

type Props = {};

const CategoryProductPreview: React.FunctionComponent<Props> =
  (): JSX.Element => {
    return (
      <Box>
        <Image
          src={'/images/mascot-1.png'}
          alt={'Product image'}
          width={200}
          height={200}
        />
        <Box>Test Content</Box>
      </Box>
    );
  };

export default CategoryProductPreview;

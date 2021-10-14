import React from 'react';

import { useCategorySearchStyles } from '../CategorySearchStyles';

import Box from '@material-ui/core/Box';
import Image from 'next/Image';

type Props = {};

const CategoryProductPreview: React.FunctionComponent<Props> =
  (): JSX.Element => {
    const styles = useCategorySearchStyles();

    return (
      <Box className={styles.productBox}>
        <Image
          src={'/images/mascot-1.png'}
          alt={'Product image'}
          width={200}
          height={200}
          className={styles.productImage}
        />
        <Box className={styles.productInfoBox}>Test Content</Box>
      </Box>
    );
  };

export default CategoryProductPreview;

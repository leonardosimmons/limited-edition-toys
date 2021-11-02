import React from 'react';
import { Default } from 'utils/keys';

import { useProductDisplayCardStyles } from '../ProductDisplayCardStyles';

import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StarsGenerator from 'lib/components/generators/StarsGenerator';

type Props = {
  name: string;
  rating: number;
  slug: string;
  inStock: boolean | undefined;
};

const ProductDisplayInfo: React.FunctionComponent<Props> = ({
  inStock,
  name,
  slug,
  rating,
}): JSX.Element => {
  const styles = useProductDisplayCardStyles();

  return (
    <Grid item container direction="column" className={styles.displayInfo}>
      <Grid item>
        <Link href={`/product/${slug}`}>
          <Typography variant="h6">
            {name.length > Default.MAX_PRODUCT_NAME_LENGTH
              ? `${name.slice(0, Default.MAX_PRODUCT_NAME_LENGTH)}...`
              : name}
          </Typography>
        </Link>
      </Grid>
      <Grid item>
        <Typography
          variant="caption"
          style={{ color: inStock ? 'green' : 'red' }}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </Grid>
      <Grid item container>
        <StarsGenerator rating={rating} />
      </Grid>
    </Grid>
  );
};

export default ProductDisplayInfo;

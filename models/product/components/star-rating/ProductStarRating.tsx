import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import StarsGenerator from 'lib/components/generators/StarsGenerator';

type Props = {
  rating: number;
  reviews: number;
};

const ProductStarRating: React.FunctionComponent<Props> = ({
  rating,
  reviews,
}): JSX.Element => {
  return (
    <React.Fragment>
      <Container>
        <StarsGenerator rating={rating} />
      </Container>
      <Typography variant="caption">{`(${reviews} customer reviews)`}</Typography>
    </React.Fragment>
  );
};

export default ProductStarRating;

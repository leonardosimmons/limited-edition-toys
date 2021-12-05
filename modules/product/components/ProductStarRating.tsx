import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

type Props = {
  rating: number;
  reviews: number;
  name: string;
};

const ProductStarRating: React.FunctionComponent<Props> = ({
  rating,
  reviews,
  name,
}): JSX.Element => {
  return (
    <React.Fragment>
      <Container>
        <Rating
          name={`${name}-rating`}
          value={rating}
          precision={0.1}
          readOnly
        />
      </Container>
      <Typography variant="caption">{`(${reviews} customer reviews)`}</Typography>
    </React.Fragment>
  );
};

export default ProductStarRating;

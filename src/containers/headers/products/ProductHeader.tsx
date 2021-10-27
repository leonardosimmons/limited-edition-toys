import React from 'react';

import { useProductHeaderStyles } from './ProductHeaderStyles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

type Props = {
  title: string;
};

const ProductHeader: React.FunctionComponent<Props> = ({
  title,
}): JSX.Element => {
  const styles = useProductHeaderStyles();

  return (
    <Container className={styles.mainContainer} maxWidth={false}>
      <Typography variant="h2" className={styles.title}>
        {title}
      </Typography>
    </Container>
  );
};

export default ProductHeader;

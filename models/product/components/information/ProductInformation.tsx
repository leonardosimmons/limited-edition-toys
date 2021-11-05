import React from 'react';
import { ProductInformationSection } from './styles/InformationSection';

import { productCategories } from 'data/navbar-categories';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import ProductDetails from './components/ProductDetails';
import ProductAction from './components/ProductAction';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

type Props = {
  slug: string;
  item?: boolean;
};

const ProductInformation: React.FunctionComponent<Props> = ({
  slug,
  item,
}): JSX.Element => {
  return (
    <ProductInformationSection
      item={item || false}
      container
      direction="column">
      <ProductDetails slug={slug} />
      <ProductAction />
      <Grid item>
        <Typography variant="h3">Product Details</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          laborum dolor quia quam commodi in, eligendi dignissimos, doloremque
          mollitia nesciunt esse omnis aperiam cupiditate quaerat error nihil
          quas delectus vero.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">Other Categories You May Like: </Typography>
        {productCategories.map((category) => (
          <Link href={category.link}>
            <a>{category.name + ','}</a>
          </Link>
        ))}
      </Grid>
      <Grid item container>
        <Typography variant="h3">Love This? Share With: </Typography>
        <FacebookIcon sx={{ fill: '#4267B2' }} />
        <InstagramIcon sx={{ fill: '#E1306C' }} />
        <TwitterIcon sx={{ fill: '#1DA1F2' }} />
      </Grid>
    </ProductInformationSection>
  );
};

export default ProductInformation;

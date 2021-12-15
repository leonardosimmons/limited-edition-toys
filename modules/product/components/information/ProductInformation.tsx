import React from 'react';

import { useAppSelector } from 'src/redux';
import { appSelector } from 'src/redux/selector';
import productCategories from 'data/categories.json';
import { Promotion, PromotionDiscount } from 'modules/promotions/types';
import { usePromotions } from 'modules/promotions/hooks/usePromotions';

import { ProductInformationSection } from './styles/InformationSection';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
  promotion?: Promotion[];
};

const ProductInformation: React.FunctionComponent<Props> = ({
  slug,
  item,
  promotion,
}): JSX.Element => {
  const ctx = useAppSelector(appSelector);

  //* -------------------------------------------------
  // Promotions
  const { calculateDiscountPrice } = usePromotions();
  const [discount, setDiscount] = React.useState<PromotionDiscount>();

  React.useEffect(() => {
    if (promotion) {
      const discountPrice = calculateDiscountPrice(
        ctx.product.current.price_excluding_tax!,
        promotion[0],
      );
      setDiscount({
        promotion: promotion[0],
        price: discountPrice,
      });
    }
  }, [promotion]);

  //* -------------------------------------------------
  // Render

  return (
    <ProductInformationSection
      item={item || false}
      container
      direction="column">
      <ProductDetails slug={slug} discount={discount ? discount : undefined} />
      <ProductAction />
      <Grid item>
        {/* <Typography variant="h3">{''}</Typography>
        <Typography variant="body1" sx={{ minHeight: '100px' }}>
          {''}
        </Typography> */}
      </Grid>
      <Grid item>
        <Typography variant="h3">Other Categories You May Like: </Typography>
        <Box>
          {productCategories.map((category, index) => (
            <Link key={index} href={category.link}>
              <a>{category.name + ','}</a>
            </Link>
          ))}
        </Box>
      </Grid>
      <Grid item>
        <Typography variant="h3">Love This? Share With: </Typography>
        <FacebookIcon sx={{ fill: '#4267B2' }} />
        <InstagramIcon sx={{ fill: '#E1306C' }} />
        <TwitterIcon sx={{ fill: '#1DA1F2' }} />
      </Grid>
    </ProductInformationSection>
  );
};

export default ProductInformation;

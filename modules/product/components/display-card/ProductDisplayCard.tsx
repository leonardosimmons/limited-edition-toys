import React from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from 'src/redux';
import {
  VendProduct,
  ProductCartToken,
  ProductInventory,
  ProductOrigin,
} from 'modules/product/types';
import { PromotionDiscount } from 'modules/promotions/types';
import { WooCommerceProduct } from '../../../woocommerce/types';
import { CartSessionToken } from 'modules/cart/types';

import { usePromotions } from 'modules/promotions/hooks/usePromotions';
import { useCart } from 'modules/cart/hooks/useCart';
import { useGetInventoryById } from 'modules/product/queries';
import { useSingleProduct } from 'modules/product/hooks/useSingleProduct';
import { useCartSession } from 'modules/cart/hooks/useCartSession';

import { appSelector } from 'src/redux/selector';

import { ProductDisplayCardImageBox } from './styles/ProductDisplayImageBox';

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import ProductDisplayInfo from './components/ProductDisplayInfo';
import ProductDisplayAction from './components/ProductDisplayAction';
import DisplayCard from '../../../../lib/components/cards/DisplayCard';

type Props = {
  product: VendProduct | WooCommerceProduct;
  type: ProductOrigin;
  index?: number;
};

const ProductDisplayCard: React.FunctionComponent<Props> = ({
  product,
  type,
  index,
}): JSX.Element => {
  const cart = useCart();
  const router = useRouter();
  const ctx = useSingleProduct();
  const session = useCartSession();
  const app = useAppSelector(appSelector);
  const [slug, setSlug] = React.useState<string | undefined>();
  const { status, data: inventory, error } = useGetInventoryById((product as VendProduct).id);

  // once populated set the url slug for the product
  React.useEffect(() => {
    if (product) {
      setSlug(
        (product as VendProduct).name
          .toLowerCase()
          .replace(/[' '/]/g, '-')
          .replace(/[!:.;()""\[\]]/g, '')
          .replace(/(--|---|-+-)/g, '-'),
      );
    }
  }, [product]);

  //* -------------------------------------------------
  // Promotions
  const {
    calculateDiscountPrice,
    checkForPromotions,
    status: promotionStatus,
    promotions,
  } = usePromotions();
  const [discount, setDiscount] = React.useState<
    Partial<PromotionDiscount> | undefined
  >(undefined);

  // check if item matches a current promotion
  React.useEffect(() => {
    if (discount) {
      setDiscount({ promotion: undefined, price: 0 });
    }
    if (promotions && promotions.length > 0) {
      const result = checkForPromotions(product as VendProduct);
      if (result && result.length > 0) {
        const discountPrice = calculateDiscountPrice(
          (product as VendProduct).price_excluding_tax!,
          result[0],
        );
        setDiscount({
          promotion: result[0],
          price: discountPrice,
        });
      }
    }
  }, [product]);

  //* -------------------------------------------------
  // Stock

  const [inStock, setInStock] = React.useState<boolean>(false);
  const [stockCount, setStockCount] = React.useState<number>(0);

  // checks if product is 'in stock'
  React.useEffect(() => {
    if (inventory) {
      let count: number = 0;
      inventory.forEach((item: ProductInventory) => {
        if (item.inventory_level > 0) {
          count = count + item.inventory_level;
          if (!inStock) {
            setInStock(true);
          }
        }
      });
      setStockCount(count);
    }
  }, [inventory]);

  //* -------------------------------------------------
  // Handlers

  async function handleAddToCart(): Promise<void> {
    const token: ProductCartToken = {
      product: product as VendProduct,
      quantity: 1,
      stock: stockCount,
      total: (product as VendProduct).price_excluding_tax as number,
      discount: discount ? (discount as PromotionDiscount) : undefined,
    };
    const sessionToken: CartSessionToken = {
      sku: (product as VendProduct).sku,
      quantity: 1,
      stock: stockCount,
      discountId: (discount && discount.promotion?.id) || undefined,
    };
    cart.add(token);
    await session.add(sessionToken);
    router.push('/cart');
  }

  // redirects to product page
  function handleImageClicked(): void {
    ctx.reset();
    ctx.setSelection(product as VendProduct);
    router.push(`/products/single/${slug}`);
  }

  //* -------------------------------------------------
  // Render

  if (status === 'loading') {
    return (
      <DisplayCard>
        <CircularProgress color={'secondary'} />
      </DisplayCard>
    );
  }

  return (
    <DisplayCard>
      <Grid container direction="column" spacing={1}>
        <Grid item sx={{ padding: 0 }}>
          <ProductDisplayCardImageBox>
            <Image
              priority={
                app.ui.status.viewport === 'desktop' && index && index < 8
                  ? true
                  : app.ui.status.viewport === 'tablet' && index && index < 6
                  ? true
                  : !!(app.ui.status.viewport === 'mobile' && index && index < 2)
              }
              src={(product as VendProduct).image_url as string}
              alt="product image"
              layout="fill"
              objectFit="contain"
              onClick={handleImageClicked}
            />
          </ProductDisplayCardImageBox>
        </Grid>
        <ProductDisplayInfo
          name={(product as VendProduct).name}
          rating={0}
          slug={slug as string}
          inStock={inStock}
          promotion={(discount && discount.promotion) || undefined}
        />
        <ProductDisplayAction
          inStock={inStock}
          price={(product as VendProduct).price_excluding_tax as number}
          addToCart={handleAddToCart}
          promotion={(discount && discount.promotion) || undefined}
        />
      </Grid>
    </DisplayCard>
  );
};

export default ProductDisplayCard;

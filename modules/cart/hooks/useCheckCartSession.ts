import { ProductCartToken } from 'modules/product/types';
import { useProducts } from 'modules/product/useProducts';
import { usePromotions } from 'modules/promotions/hooks/usePromotions';
import { PromotionDiscount } from 'modules/promotions/types';
import React from 'react';
import { useCart } from './useCart';
import { useCartSession } from './useCartSession';

function useCheckCartSession() {
  const cart = useCart();
  const session = useCartSession();
  const { products } = useProducts();
  const {
    calculateDiscountPrice,
    checkForPromotions,
    status: promotionStatus,
  } = usePromotions();

  React.useEffect(() => {
    async function check() {
      await checkCartSession();
    }
    check();
  }, [products.status, promotionStatus]);

  async function checkCartSession(): Promise<void> {
    if (products.status !== 'loading' && promotionStatus !== 'loading') {
      try {
        const cartSession = await session.get();
        if (cartSession && cartSession.length > 0) {
          if (cart.items.length > 0) {
            console.log('cart up to date');
            return;
          } else if (cart.items.length === 0) {
            products.list.forEach((product) => {
              cartSession.forEach((sItem) => {
                if (sItem.sku === product.sku) {
                  const discounts = checkForPromotions(product);
                  if (discounts.length === 0) {
                    const token: ProductCartToken = {
                      product,
                      quantity: sItem.quantity,
                      stock: sItem.stock,
                      total:
                        (product.price_excluding_tax as number) *
                        sItem.quantity,
                    };
                    cart.add(token);
                  } else {
                    const price = calculateDiscountPrice(
                      product.price_excluding_tax!,
                      discounts[0],
                    );
                    const discount: PromotionDiscount = {
                      promotion: discounts[0],
                      price,
                    };
                    const token: ProductCartToken = {
                      product,
                      quantity: sItem.quantity,
                      stock: sItem.stock,
                      total: price,
                      discount,
                    };
                    cart.add(token);
                  }
                }
              });
            });
          }
        }
      } catch (err: any) {
        console.log(err);
      }
    }
  }
}

export { useCheckCartSession };

import React from 'react';
import { VendProduct, ProductCartToken } from 'modules/product/types';

import { useProducts } from 'modules/product/useProducts';
import { usePromotions } from './usePromotions';

type DiscountToken = {
  total: number;
  items: VendProduct[];
};

function useCheckPromotions(items: ProductCartToken[]) {
  const { products } = useProducts();
  const { promotions } = usePromotions();
  const [discounts, setDiscounts] = React.useState<DiscountToken>({
    total: 0,
    items: [],
  });

  // Discounts
  const [funkoUsed, setFunkoUsed] = React.useState<boolean>(false);
  const [mtgFourtyUsed, SetMtgFourtyUsed] = React.useState<boolean>(false);

  // add
  React.useEffect(() => {
    if (items) {
      if (!funkoUsed) funkoDiscount(items, 'add');
      if (!mtgFourtyUsed) checkMTGOrigns(items);
    }
  }, [products.status, items]);

  // remove
  React.useEffect(() => {
    if (items) {
      if (funkoUsed) funkoDiscount(items, 'remove');
    }
  }, [items]);

  function funkoDiscount(
    items: ProductCartToken[],
    type: 'add' | 'remove',
  ): void {
    const brandId = '5f5bce96-d692-491f-a203-3fc7a2349511';
    let count = 0;

    if (items) {
      items.forEach((item) => {
        if (item.product.brand_id === brandId) {
          count = count + item.quantity;
        }
      });

      if (type === 'add') {
        if (count >= 4) {
          const token: DiscountToken = {
            total: discounts.total - 12,
            items: discounts.items,
          };
          setDiscounts(token);
          setFunkoUsed(true);
        }
      } else if (type === 'remove') {
        if (count < 4) {
          const token: DiscountToken = {
            total: discounts.total + 12,
            items: discounts.items,
          };
          setDiscounts(token);
          setFunkoUsed(false);
        }
      }
    }
  }

  function checkMTGOrigns(items: ProductCartToken[]) {
    let total = 0;
    const promotion = promotions?.find(
      (item) => item.id === '1463988944516415488',
    );
    if (promotion) {
      promotion.condition.include?.forEach((promo) => {
        items.forEach((item) => {
          if (item.product.id === promo.value) {
            total = total + item.total;
          } else {
            item.product.tag_ids?.forEach((tag) => {
              if (tag === promo.value) {
                total = total + item.total;
              }
            });
          }
        });
      });

      if (total > 40) {
        const product = products.list.find(
          (item) => item.sku === '630509301591',
        );
        setDiscounts({
          total: discounts.total,
          items:
            discounts && discounts.items.length > 0
              ? [...discounts.items, product as VendProduct]
              : [product as VendProduct],
        });
        SetMtgFourtyUsed(true);
      }
      return false;
    }
  }

  return {
    discounts,
  };
}

export { useCheckPromotions };

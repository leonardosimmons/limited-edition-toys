import React from 'react';
import { Promotion } from '../types';
import { Product } from 'modules/product/types';

import { useGetPromotions } from '../queries';

function usePromotions() {
  const { status, data: promotions, error } = useGetPromotions();

  function calculateDiscountPrice(price: number, promotion: Promotion): number {
    switch (promotion.action.type) {
      case 'percent_pool_discount':
        return price - price * promotion.action.value;
      default:
        return price;
    }
  }

  const checkForPromotions = React.useMemo(
    () => (product: Product) => {
      let promos: Promotion[] = [];
      if (promotions) {
        promotions!.forEach((promotion) => {
          promotion.condition.include?.forEach((item) => {
            const entries = Object.entries(product);
            entries.forEach((entry) => {
              if (item.field.split('_')[0] === 'product') {
                if (item.value === entry[1]) {
                  if (
                    !promos.includes(promotion) &&
                    !promotion.use_promo_code
                  ) {
                    if (checkPromotionIsValid(promotion)) {
                      promos.push(promotion);
                    }
                  }
                }
              } else if (item.field.split('_')[0] === entry[0].split('_')[0]) {
                if (
                  !Array.isArray(entry[1]) &&
                  !(entry[1] instanceof Object) &&
                  entry[1] !== null
                ) {
                  if (item.value === entry[1]) {
                    if (
                      !promos.includes(promotion) &&
                      !promotion.use_promo_code
                    ) {
                      if (checkPromotionIsValid(promotion)) {
                        promos.push(promotion);
                      }
                    }
                  }
                }
              }
            });
          });
        });
      }
      return promos;
    },
    [promotions],
  );

  function checkPromotionIsValid(promotion: Promotion): boolean {
    if (
      promotion.end_time &&
      new Date(promotion.end_time) < new Date(Date.now())
    ) {
      return false;
    } else {
      return true;
    }
  }

  return {
    checkForPromotions,
    error,
    calculateDiscountPrice,
    promotions,
    status,
  };
}

export { usePromotions };

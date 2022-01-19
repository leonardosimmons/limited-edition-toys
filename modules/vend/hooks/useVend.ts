import { VEND_ONLINE_CUSTOMER_GROUP_ID, VEND_OUTLET_ID } from 'lib/constants';
import { VendDiscount, VendLineItem } from '../types';

import { ProductCartToken } from 'modules/product/types';

function useVend() {
  function createLineItemToken(
    item: ProductCartToken,
    discounted?: boolean,
  ): VendLineItem {
    return {
      handle: item.product.handle,
      product_id: item.product.id,
      product_brand_id: item.product.brand_id,
      product_supplier_id: item.product.supplier_id,
      product_type_id: item.product.product_type_id,
      product_tag_ids: item.product.tag_ids,
      quantity: item.quantity,
      unit_price:
        (item.discount && item.discount.price) ||
        item.product.price_excluding_tax,
      price_adjusted:
        !!(item.discount &&
          item.discount.price !== item.product.price_excluding_tax),
      promotion_ids: discounted ? [item.discount?.promotion.id] : undefined,
    } as VendLineItem;
  }

  function createDiscount(total: number, items: VendLineItem[]): VendDiscount {
    return {
      customer: {
        customer_group_id: '',
      },
      sale: {
        line_items: items,
        total_price: total,
        total_tax: 0,
        sale_date: new Date(Date.now()).toISOString().replace('Z', ''),
      },
      channel: 'online',
      outlet_id: '',
      //! ADD PROMO_CODE_HERE
    };
  }

  return {
    create: {
      discount: createDiscount,
      lineItem: createLineItemToken,
    },
  };
}

export { useVend };

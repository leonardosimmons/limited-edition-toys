import { IncludeExclude, MinMaxQuantity } from 'utils/types';

export type PromotionActionType =
  | 'basic_percent_discount'
  | 'basic_fixed_discount'
  | 'fixed_discount'
  | 'percent_discount'
  | 'loyality'
  | 'fixed_price_discount'
  | 'fixed_pool_discount'
  | 'percent_pool_discount';

export type PromotionAction = IncludeExclude &
  MinMaxQuantity & {
    type: PromotionActionType;
    value: number;
  };

export type PromotionConditionType = 'product_set' | 'sale_price';

export type PromotionCondition = IncludeExclude &
  MinMaxQuantity & {
    type: PromotionConditionType;
    quantity: number;
    min_price?: number;
  };

export type PromotionDiscount = {
  promotion: Promotion;
  price: number;
};

export type PromotionSearchField =
  | 'brand_id'
  | 'product_id'
  | 'tag_id'
  | 'type_id'
  | 'variant_parent_id';

export type PromotionQueryType = 'list' | 'products' | 'id' | 'promoCodes';

export type Promotion = {
  action: PromotionAction;
  condition: PromotionCondition;
  name: string;
  start_time: string;
  add_promo_code: any;
  channels?: string[];
  use_promo_code: boolean;
  customer_group_ids?: string[];
  description?: string;
  end_time?: string;
  id?: string;
  loyality_mulitplier?: number;
  outlet_ids?: string[];
  promo_code_summary?: {
    redeemed_amount?: number;
    total_promo_code?: number;
  };
  status?: 'active' | string;
};

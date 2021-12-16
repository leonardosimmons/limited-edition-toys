export type VendDiscount = {
  customer: {
    customer_group_id?: string;
  };
  sale: {
    line_items: VendLineItem[];
    total_price: number;
    total_tax: number;
    sale_date: string;
  };
  channel: string;
  outlet_id: string;
  promo_code?: string;
  is_tax_inclusive?: boolean;
};

export type VendLineItem = {
  handle: string;
  product_id: string;
  product_brand_id: string;
  product_supplier_id: string;
  product_type_id: string;
  product_tag_ids: string[];
  quantity: number;
  unit_price: number;
  id?: string;
  confirmed?: boolean;
  explicit_loyalty_value?: boolean;
  loyalty_value?: number;
  promotion_ids?: string[];
  price_adjusted?: boolean;
  variant_parent_id?: string;
  unit_discount?: number;
};

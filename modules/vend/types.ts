export type VendCustomerMeta = {
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  version: number;
}

export type VendCustomer = {
  id: string;
  customer_code: string | null;
  name: string | null;
  first_name: string;
  last_name: string;
  email: string | null;
  year_to_date: number;
  balance: number;
  loyalty_balance: number;
  note: string | null;
  gender: string | null;
  date_of_birth: string | null;
  company_name: string | null;
  do_not_email: boolean,
  contact_source: string | null;
  phone: string | null;
  mobile: string | null;
  fax: string | null;
  twitter: string | null;
  website: string | null;
  physical_address_1: string | null;
  physical_address_2: string | null;
  physical_suburb: string | null;
  physical_city: string | null;
  physical_postcode: string | null;
  physical_state: string | null;
  physical_country_id: string | null;
  postal_address_1: string | null;
  postal_address_2: string | null;
  postal_suburb: string | null;
  postal_city: string | null;
  postal_postcode: string | null;
  postal_state: string | null;
  postal_country_id: string | null;
  customer_group_id: string | null;
  enable_loyalty: boolean,
  custom_field_1: string | null;
  custom_field_2: string | null;
  custom_field_3: string | null;
  custom_field_4: string | null;
}

export type VendCustomerResponse = VendCustomerMeta & VendCustomer;

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

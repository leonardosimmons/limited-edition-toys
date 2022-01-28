import { Combinable } from '../../utils/types';

export type WooCommerceCustomerBilling = {
  first_name: string;
  last_name: string;
  address_1: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  address_2?: string;
  company?: string;
  phone?: string;
};

export type WooCommerceCustomerInformation = {
  email: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  password?: string;
};

export type WooCommerceCustomerMetaData = {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  meta_data: any[];
  _links: {
    self: any[];
    collection: any[];
  };
  avatar_url?: string;
};

export type WooCommerceCustomerShipping = {
  first_name: string;
  last_name: string;
  address_1: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  address_2?: string;
  company?: string;
};

export type WooCommerceCustomer = WooCommerceCustomerInformation & {
  billing?: WooCommerceCustomerBilling;
  shipping?: WooCommerceCustomerShipping;
  role?: string;
  is_paying_customer?: boolean;
};

export type WooCommerceCustomerResponse = WooCommerceCustomerMetaData &
  WooCommerceCustomer;

export type WooCommerceLineItem = {
  sku: string;
  quantity: number;
  price: string;
  total: string;
  subTotal: string;
  variation_id?: Combinable;
}

export type WooCommerceOrderToken = {
  currency: string;
  customer_id: number;
  payment_method: string;
  payment_method_title: string;
  set_paid: boolean;
  shipping_total: string;
  transaction_id: string;
  total: string;
  discount_total?: string;
  billing: WooCommerceCustomerBilling;
  shipping: WooCommerceCustomerShipping;
  lineItems: WooCommerceLineItem[],
  shipping_lines: WooCommerceShippingLine[]
}

export type WooCommerceShippingLine = {
  method_id: string;
  method_title: string;
  total: string;
}
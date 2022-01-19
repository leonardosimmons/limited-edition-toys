import { KeyValuePair } from '../../utils/types';

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
  username: string;
  first_name?: string;
  last_name?: string;
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
};

export type WooCommerceCustomerResponse = WooCommerceCustomerMetaData &
  WooCommerceCustomer;

import { Combinable } from '../../utils/types';

export type WooCommerceAttribute = {
  "id": number;
  "name": string;
  "position": number;
  "visible": boolean;
  "variation": boolean;
  "options": string[]
}

export type WooCommerceCategory = {
  id: number;
  name: string;
  slug: string;
}

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

export type WooCommerceImage = {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

export type WooCommerceLineItem = {
  product_id: number;
  quantity: number;
  sku?: string;
  price?: string;
  total?: string;
  subTotal?: string;
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
  line_items: WooCommerceLineItem[],
  shipping_lines: WooCommerceShippingLine[]
}

export type WooCommerceShippingLine = {
  method_id: string;
  method_title: string;
  total: string;
}

export type WooCommerceProductVerification = {
  id: number;
  sku: string;
}

export type WooCommerceProduct = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created:string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: string | null;
  date_on_sale_from_gmt: string | null;
  date_on_sale_to: string | null;
  date_on_sale_to_gmt: string | null;
  price_html: string;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: any[],
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: false,
  stock_quantity: null,
  stock_status: string;
  backorders: string;
  backorders_allowed: false,
  backordered: false,
  sold_individually: false,
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  },
  shipping_required: true,
  shipping_taxable: true,
  shipping_class: string;
  shipping_class_id: 0,
  reviews_allowed: true,
  average_rating: string;
  rating_count: 0,
  related_ids: number[],
  upsell_ids: number[],
  cross_sell_ids: number[],
  parent_id: number;
  purchase_note: string;
  categories: WooCommerceCategory[],
  tags: string[];
  images: WooCommerceImage[],
  attributes: WooCommerceAttribute[],
  default_attributes: any[],
  variations: any[],
  grouped_products: any[],
  menu_order: number;
  meta_data: any[],
  _links: {
    self: [
      {
        href: string;
      }
    ],
    collection: [
      {
        href: string;
      }
    ]
  }
}

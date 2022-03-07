import { Combinable } from '../../utils/types';

export type WooCommerceCatalogVisibility =
  | 'visible'
  | 'catalog'
  | 'search'
  | 'hidden';

export type WooCommerceCategory = {
  id: number;
  name: string;
  slug: string;
};

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
};

export type WooCommerceLineItem = {
  product_id: number;
  quantity: number;
  sku?: string;
  price?: string;
  total?: string;
  subTotal?: string;
  variation_id?: Combinable;
};

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
  line_items: WooCommerceLineItem[];
  shipping_lines: WooCommerceShippingLine[];
};

export type WooCommerceProductAttribute = {
  id: number;
  name: string;
  options: string[];
  position: number;
  visible: boolean;
  variation: boolean;
};

export type WooCommerceProductDefaultAttribute = {
  id: number;
  name: string;
  options: string[];
};

export type WooCommerceProductBackOrder = 'no' | 'notify' | 'yes';

export type WooCommerceProductCategory = {
  id: number;
  name?: string;
  slug?: string;
};

export type WooCommerceProductDownloads = {
  id: number;
  name?: string;
  file: string;
};

export type WooCommerceProductDimensions = {
  length: string;
  width: string;
  height: string;
};

export type WooCommerceProductMetaData = {
  id: number;
  key: string;
  value: string;
};

export type WooCommerceProductStatus =
  | 'draft'
  | 'pending'
  | 'private'
  | 'publish';

export type WooCommerceProductStockStatus =
  | 'instock'
  | 'outofstock'
  | 'onbackorder';

export type WooCommerceProductTag = {
  id: number;
  name?: string;
  slug?: string;
};

export type WooCommerceProductTaxStatus = 'taxable' | 'shipping' | 'none';

export type WooCommerceProductType =
  | 'simple'
  | 'grouped'
  | 'external'
  | 'variable';

export type WooCommerceProductVerification = {
  id: number;
  sku: string;
};

export type WooCommerceShippingLine = {
  method_id: string;
  method_title?: string;
  total?: string;
};

export type WooCommerceProduct = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: WooCommerceProductType;
  status: WooCommerceProductStatus;
  featured: boolean;
  catalog_visibility: WooCommerceCatalogVisibility;
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
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: WooCommerceProductDownloads[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: WooCommerceProductTaxStatus;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: number;
  backorders: WooCommerceProductBackOrder;
  backorders_allowed: boolean;
  backordered: boolean;
  low_stock_amount: number | null;
  sold_individually: boolean;
  weight: string;
  dimensions: WooCommerceProductDimensions;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: WooCommerceProductCategory[];
  tags: WooCommerceProductTag[];
  images: WooCommerceImage[];
  attributes: WooCommerceProductAttribute[];
  default_attributes: WooCommerceProductDefaultAttribute[];
  variations: number[];
  grouped_products: [];
  menu_order: number;
  price_html: string;
  related_ids: number[];
  meta_data: WooCommerceProductMetaData[];
  stock_status: WooCommerceProductStockStatus;
  _links: {
    self: {
      href: string;
    }[];
    collection: {
      href: string;
    }[];
  };
  bundled_by?: any[];
  bundle_stock_status?: string;
  bundle_stock_quantity?: number;
  bundle_virtual?: boolean;
  bundle_layout?: string;
  bundle_add_to_cart_form_location?: string;
  bundle_editable_in_cart?: boolean;
  bundle_sold_individually_context?: string;
  bundle_item_grouping?: string;
  bundle_min_size?: string;
  bundle_max_size?: string;
  bundled_items?: any[];
  bundle_sell_ids?: number[];
  wcpa_form_fields?: string | null;
};


/*

export type WooCommerceProductOriginal = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
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
  downloads: any[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: null;
  stock_status: string;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  sold_individually: boolean;
  weight: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  related_ids: number[];
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  purchase_note: string;
  categories: WooCommerceCategory[];
  tags: string[];
  images: WooCommerceImage[];
  attributes: WooCommerceProductAttribute[];
  default_attributes: any[];
  variations: any[];
  grouped_products: any[];
  menu_order: number;
  meta_data: any[];
  _links: {
    self: [
      {
        href: string;
      },
    ];
    collection: [
      {
        href: string;
      },
    ];
  };
};

*/

import { Combinable } from 'utils/types';

export type ProductType = {
  id?: string;
  name: string;
  deleted_at?: string;
  version?: number;
};

export type ProductPropertyOptions = Partial<ProductType>;

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  parent: string;
  description: string;
  display: string;
  image: string[];
  menuOrder: string;
  count: string;
  _links: any;
};

export type ProductFilterOptions = 'category' | 'type' | 'tag';

export type ProductInventory = {
  id: string;
  product_id: string;
  outlet_id: string;
  inventory_level: number;
  reorder_point: number;
  reorder_amount: number;
};

export type Product = {
  id: string;
  name: string;
  description?: string;
  handle: string;
  sku: string;
  source?: string;
  source_id?: string;
  source_variant_id?: string;
  active?: boolean;
  has_inventory?: boolean;
  is_composite?: boolean;
  has_variants?: boolean;
  variant_parent_id?: string;
  variant_name?: string;
  variant_options?: {
    name?: string;
    value?: string;
  };
  variant_count?: number;
  price_including_tax?: number;
  price_excluding_tax?: number;
  supply_price?: number;
  supplier_id?: string;
  supplier_code?: string;
  supplier?: ProductPropertyOptions;
  product_type_id?: string;
  type?: ProductPropertyOptions;
  brand_id?: string;
  brand?: ProductPropertyOptions;
  tag_ids?: string[];
  categories?: ProductPropertyOptions[];
  attributes?: {
    key?: string;
    value?: string;
  }[];
  image_url?: string;
  image_thumbnail_url?: string;
  images?: {
    id?: string;
    url?: string;
    version?: number;
  }[];
  loyalty_amount?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  version?: number;
};

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

export type Product = {
  id: string;
  name: string;
  description?: string;
  handle: string;
  sku: string;
  source?: string;
  sourceId?: string;
  sourceVariantId?: string;
  active?: boolean;
  hasInventory?: boolean;
  isComposite?: boolean;
  hasVariants?: boolean;
  variantParentId?: string;
  variantName?: string;
  variantOptions?: {
    name?: string;
    value?: string;
  };
  variantCount?: number;
  priceIncluding_tax?: number;
  price_excluding_tax?: number;
  supplyPrice?: number;
  supplierID?: string;
  supplierCode?: string;
  supplier?: ProductPropertyOptions;
  productTypeId?: string;
  type?: ProductPropertyOptions;
  brandId?: string;
  brand?: ProductPropertyOptions;
  tagIds?: string[];
  categories?: ProductPropertyOptions[];
  attributes?: {
    key?: string;
    value?: string;
  }[];
  imageUrl?: string;
  imageThumbnailUrl?: string;
  images?: {
    id?: string;
    url?: string;
    version?: number;
  }[];
  loyaltyAmount?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  version?: number;
};

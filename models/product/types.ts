import { Combinable } from 'utils/types';

export type ProductTagInfo = {
  id: string;
  name: string;
  deleted_at: Combinable;
  version: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  handle: string;
  sku: string;
  source: string;
  source_id: string;
  source_variant_id: string;
  active: boolean;
  has_inventory: boolean;
  is_composite: boolean;
};

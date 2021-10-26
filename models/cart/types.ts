import { Product } from 'models/product/types';

export type CartStatus = 'empty' | 'error' | 'pending';

export type CartSummary = {
  count: number;
  items: Product[];
  total: number;
};

export type CartContext = {
  userId: number;
  summary: CartSummary;
  status: CartStatus;
};

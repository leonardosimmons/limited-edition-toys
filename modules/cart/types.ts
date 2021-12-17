export type CartItem = {
  quantity: number;
  productId: string;
};

export type CartStatus =
  | 'checking-out'
  | 'complete'
  | 'empty'
  | 'error'
  | 'pending';

export type CartSessionToken = {
  sku: string;
  quantity: number;
  stock: number;
  discountId?: string;
};

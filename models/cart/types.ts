export type CartStatus =
  | 'checking-out'
  | 'complete'
  | 'empty'
  | 'error'
  | 'pending';

export type CartSessionToken = {
  id: string;
  quantity: number;
};

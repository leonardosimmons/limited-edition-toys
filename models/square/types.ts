import { CreateCustomerRequest, OrderLineItem } from 'square';

export type SquareCheckoutToken = {
  info: CreateCustomerRequest;
  items: OrderLineItem[];
};

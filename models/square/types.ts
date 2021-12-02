import {
  CreateCheckoutRequest,
  CreateCustomerRequest,
  SearchCustomersRequest,
} from 'square';

export type CheckoutToken = {
  search: SearchCustomersRequest;
  create: CreateCustomerRequest;
  options: CreateCheckoutRequest;
};

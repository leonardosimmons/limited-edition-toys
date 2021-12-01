import {
  CreateCheckoutRequest,
  CreateCustomerRequest,
  SearchCustomersRequest,
} from 'square';

export type CheckoutToken = {
  find: SearchCustomersRequest;
  create: CreateCustomerRequest;
  options: CreateCheckoutRequest;
};

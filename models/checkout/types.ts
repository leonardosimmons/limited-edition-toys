import { Combinable, CustomInputConfig } from 'utils/types';

export type CheckoutInputConfig = CustomInputConfig & {
  label: string;
  propName: string;
};

export type BillingState = {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  apt?: Combinable;
  company?: string;
  phone?: string;
};

export type ShippingState = {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  apt?: Combinable;
  company?: string;
  phone?: string;
};

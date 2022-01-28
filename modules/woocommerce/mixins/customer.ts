import axios from 'axios';
import { Customer } from 'square';
import {
  WooCommerceCustomer as WooCommerceCustomerType, WooCommerceCustomerBilling,
  WooCommerceCustomerResponse,
  WooCommerceCustomerShipping,
} from '../types';
import { Constructor, KeyValuePair } from '../../../utils/types';
import { UserSignInToken } from '../../auth/types';
import { WooCommerceBase } from './base';

export function WooCommerceCustomerModel<TBase extends Constructor>(
  Base: TBase,
) {
  return class extends Base {
    public createCustomerToken(customer: Customer, registration: boolean, auth?: UserSignInToken): WooCommerceCustomerType {
      return registration
      ? {
          first_name: customer.givenName!,
          last_name: customer.familyName!,
          email: customer.emailAddress!,
          username: auth!.username,
          password: auth!.password,
          role: 'customer',
          is_paying_customer: false
        } as WooCommerceCustomerType
      : {
          first_name: customer.givenName!,
          last_name: customer.familyName!,
          email: customer.emailAddress!,
          username: '',
          password: 'temp123',
          shipping: this.createCustomerShippingToken(customer),
          billing: this.createCustomerBillingToken(customer),
          role: 'customer',
          is_paying_customer: true
        } as WooCommerceCustomerType
    }

    public createCustomerBillingToken(customer: Customer): WooCommerceCustomerBilling {
      return {
        first_name: customer.givenName!,
        last_name: customer.familyName!,
        company: customer.companyName!,
        address_1: customer.address?.addressLine1!,
        address_2: customer.address?.addressLine2,
        city: customer.address?.locality!,
        state: customer.address?.administrativeDistrictLevel1?.toUpperCase() as string,
        postcode: customer.address?.postalCode!,
        country: 'US',
        email: customer.emailAddress!,
        phone: customer.phoneNumber!
      } as WooCommerceCustomerBilling
    }

    public createCustomerShippingToken(customer: Customer): WooCommerceCustomerShipping {
      return {
        first_name: customer.givenName!,
        last_name: customer.familyName!,
        company: customer.companyName!,
        address_1: customer.address?.addressLine1!,
        address_2: customer.address?.addressLine2,
        city: customer.address?.locality!,
        state: customer.address?.administrativeDistrictLevel1?.toUpperCase() as string,
        postcode: customer.address?.postalCode!,
        country: 'US'
      } as WooCommerceCustomerShipping
    }

    public async createCustomer(
      token: WooCommerceCustomerType,
    ): Promise<WooCommerceCustomerResponse> {
      try {
        return await axios
          .post('/api/woocommerce/customer', { token })
          .then((res: any) => {
            return res.data;
          });
      } catch (err: any) {
        throw new Error(`Unable to create new customer: ${err}`);
      }
    }

   public async getCustomers(): Promise<WooCommerceCustomerResponse[]> {
      try {
        return await axios.get('/api/woocommerce/customer').then((res: any) => {
          return res.data;
        });
      } catch (err: any) {
        throw new Error(`Unable to create new customer: ${err}`);
      }
    }

    public async updateCustomer(
      id: number,
      token: KeyValuePair<keyof WooCommerceCustomerType, string>,
    ): Promise<WooCommerceCustomerResponse> {
      try {
        const newValue = { [token.key]: token.value };
        return await axios
          .put('/api/woocommerce/customer', {
            id,
            token: newValue,
          })
          .then((res: any) => {
            return res.data;
          });
      } catch (err: any) {
        throw new Error(`Unable to create new customer: ${err}`);
      }
    }

    public async updateCustomerShipping(
      id: number,
      token: KeyValuePair<keyof WooCommerceCustomerShipping, string>,
    ): Promise<WooCommerceCustomerResponse> {
      try {
        const newValue = { [token.key]: token.value };
        return await axios
          .put('/api/woocommerce/customer', {
            id,
            token: newValue,
          })
          .then((res: any) => {
            return res.data;
          });
      } catch (err: any) {
        throw new Error(`Unable to create new customer: ${err}`);
      }
    }
  };
}

export const WooCommerceCustomer = WooCommerceCustomerModel(WooCommerceBase);
export type WooCommerceCustomerModel = InstanceType<typeof WooCommerceCustomer>;

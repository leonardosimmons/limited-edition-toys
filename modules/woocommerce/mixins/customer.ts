import axios from 'axios';
import { Constructor, KeyValuePair } from '../../../utils/types';
import { WooCommerceCustomer, WooCommerceCustomerResponse, WooCommerceCustomerShipping } from '../types';

export function WooCommerceCustomerModel<TBase extends Constructor>(
  Base: TBase,
) {
  return class extends Base {
    async createCustomer(
      token: WooCommerceCustomer,
    ): Promise<WooCommerceCustomerResponse> {
      try {
        return await axios
          .post('/api/woocommerce/customer', { token })
          .then((res: any) => {
            console.log('mixin', res);
            return res.data;
          });
      } catch (err: any) {
        throw new Error(`Unable to create new customer: ${err}`);
      }
    }

    async getCustomers(): Promise<WooCommerceCustomerResponse[]> {
      try {
        return await axios.get('/api/woocommerce/customer').then((res: any) => {
          console.log('get', res);
          return res.data;
        });
      } catch (err: any) {
        throw new Error(`Unable to create new customer: ${err}`);
      }
    }

    async updateCustomer(
      id: number,
      token: KeyValuePair<keyof WooCommerceCustomer, string>,
    ): Promise<WooCommerceCustomerResponse> {
      try {
        const newValue = { [token.key]: token.value };
        return await axios
          .put('/api/woocommerce/customer', {
            id,
            token: newValue,
          })
          .then((res: any) => {
            console.log('get', res);
            return res.data;
          });
      } catch (err: any) {
        throw new Error(`Unable to create new customer: ${err}`);
      }
    }

    async updateCustomerShipping(
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
            console.log('get', res);
            return res.data;
          });
      } catch (err: any) {
        throw new Error(`Unable to create new customer: ${err}`);
      }
    }
  };
}

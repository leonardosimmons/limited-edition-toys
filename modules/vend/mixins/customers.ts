import { Constructor } from '../../../utils/types';
import { HttpController } from '../../../lib/HttpController';
import {
  VendCreateCustomerToken,
  VendCustomer,
  VendCustomerResponse,
} from '../types';

export function VendCustomerModel<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    private http = new HttpController();

    checkCustomerExists(
      email: string,
      tokens: VendCustomerResponse[],
    ): VendCustomerResponse | undefined {
      let exists: VendCustomerResponse | undefined;
      tokens.forEach((customer) => {
        if (customer.email === email ) {
          exists = customer;
          return;
        }
      });
      return exists;
    }

    async createCustomer(
      token: VendCreateCustomerToken,
    ): Promise<VendCustomerResponse> {
      try {
        return await this.http.post('/api/vend/customers', token);
      } catch (err: any) {
        throw new Error(`Unable to create new customer: ${err}`);
      }
    }

    async getCustomer(id: string): Promise<VendCustomerResponse> {
      try {
        return await this.http.get(`/api/vend/customers?id=${id}`);
      } catch (err: any) {
        throw new Error(`Unable to retrieve customer ${id}: ${err}`);
      }
    }

    async getCustomers(): Promise<VendCustomerResponse[]> {
      try {
        return await this.http.get('/api/vend/customers');
      } catch (err: any) {
        throw new Error(`Unable to retrieve vend customers: ${err}`);
      }
    }

    async updateCustomer(
      id: string,
      token: Partial<VendCustomer>,
      customer: Partial<VendCustomer>
    ) {
      try {
        return await this.http.put('/api/vend/customers', { id, token, customer });
      } catch (err: any) {
        throw new Error(`Unable to update customer ${id}: ${err}`);
      }
    }
  };
}

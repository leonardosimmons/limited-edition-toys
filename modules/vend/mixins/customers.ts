import { Constructor } from '../../../utils/types';
import { HttpController } from '../../../lib/HttpController';
import { VendCreateCustomerToken, VendCustomer, VendCustomerResponse } from '../types';

export function VendCustomerModel<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    private http = new HttpController();

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
      }
      catch(err: any) {
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

    async updateCustomer(id: string, token: Partial<VendCustomer>): Promise<VendCustomerResponse> {
      try {
        return await this.http.put('/api/vend/customers', token);
      }
      catch(err: any) {
        throw new Error(`Unable to update customer ${id}: ${err}`);
      }
    }
  };
}

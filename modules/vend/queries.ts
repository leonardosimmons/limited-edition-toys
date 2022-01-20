import { Queries } from 'utils/keys';
import { useQuery } from 'react-query';
import { Vend } from './vend.model';

//* CUSTOMERS ----------------------------------------------
// Single
export async function getVendCustomer(id: string) {
  return await new Vend().getCustomer(id);
}

export function useVendCustomerData(id: string) {
  return useQuery([Queries.VEND_CUSTOMER, id], () => getVendCustomer(id));
}

// List
export async function getVendCustomers() {
  return await new Vend().getCustomers();
}

export function useVendCustomersData() {
  return useQuery(Queries.VEND_CUSTOMERS, getVendCustomers);
}
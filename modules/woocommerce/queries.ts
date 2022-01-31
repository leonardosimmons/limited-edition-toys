import { Queries } from 'utils/keys';
import { useQuery } from 'react-query';
import { WooCommerce } from './woocommerce.model';
import { WooCommerceCustomerResponse } from './types';

//* CUSTOMERS ----------------------------------------------

export async function getWooCommerceCustomers(): Promise<WooCommerceCustomerResponse[]> {
  return await new WooCommerce().getCustomers();
}

export function useWooCommerceCustomersData() {
  return useQuery(Queries.WOOCOMMERCE_CUSTOMERS, getWooCommerceCustomers);
}


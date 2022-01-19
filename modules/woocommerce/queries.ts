import { Queries } from 'utils/keys';
import { useQuery } from 'react-query';
import { WooCommerce } from './woocommerce.model';

//* CUSTOMERS ----------------------------------------------

export async function getWooCommerceCustomers() {
  return await new WooCommerce().getCustomers();
}

export function useWooCommerceCustomersData() {
  return useQuery(Queries.WOOCOMMERCE_CUSTOMERS, getWooCommerceCustomers);
}
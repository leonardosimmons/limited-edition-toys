import { useWooCommerceCustomers } from './hooks/useWooCommerceCustomers';

function useWooCommerce() {
  const customer = useWooCommerceCustomers();

  return {
    customer,
  };
}

export { useWooCommerce };
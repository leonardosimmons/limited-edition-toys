import { useWooCommerceCustomersData } from '../queries';
import {
  WooCommerceCustomer,
  WooCommerceCustomerResponse,
  WooCommerceCustomerShipping,
} from '../types';
import { UpdateToken } from '../../../utils/types';
import { WooCommerce } from '../woocommerce.model';
import { useMutation, useQueryClient } from 'react-query';
import { Queries } from '../../../utils/keys';

function useWooCommerceCustomers() {
  const model = new WooCommerce();
  const queryClient = useQueryClient();
  const { status, data: customers, error } = useWooCommerceCustomersData();

  async function create(
    token: WooCommerceCustomer,
  ): Promise<WooCommerceCustomerResponse> {
    return await model.createCustomer(token);
  }

  const updateInformation = useMutation(
    (newValue: UpdateToken<WooCommerceCustomer, string>) =>
      model.updateCustomer(newValue.id as number, newValue.token),
    {
      onSuccess: (user) => {
        console.log('update mut', user);
      },
    },
  );

  const updateShipping = useMutation(
    (newValue: UpdateToken<WooCommerceCustomerShipping, string>) =>
      model.updateCustomerShipping(newValue.id as number, newValue.token),
    {
      onSuccess: (user) => {
        console.log('shipping mut', user);
      },
    },
  );

  return {
    error,
    list: customers,
    status,
    create,
    update: {
      info: updateInformation,
      shipping: updateShipping,
    },
  };
}

export { useWooCommerceCustomers };

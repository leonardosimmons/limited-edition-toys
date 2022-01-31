import { WooCommerceCustomer, WooCommerceCustomerShipping } from '../types';
import { UpdateToken } from '../../../utils/types';
import { useMutation } from 'react-query';

import { WooCommerce } from '../woocommerce.model';

function useWooCommerceCustomers() {
  const model = new WooCommerce();

  const create = useMutation((customer: WooCommerceCustomer) =>
    model.createCustomer(customer),
  );

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
    create: create.mutate,
    update: {
      info: updateInformation,
      shipping: updateShipping,
    },
  };
}

export { useWooCommerceCustomers };

import React from 'react';
import { useVendCustomers } from './hooks/useVendCustomers';
import { VEND_GUEST_ID } from '../../lib/constants';
import { useUser } from '../user/useUser';

function useVend() {
  const user = useUser();
  const [vendCustomerId, setVendCustomerId] = React.useState<string>(VEND_GUEST_ID);
  const customers = useVendCustomers(vendCustomerId);

  // converts WordPress ID to Vend ID
  React.useEffect(() => {
    if (
      user.auth.status !== 'loading' &&
      customers.status.list !== 'loading' &&
      customers.list
    ) {
      customers.list.forEach((customer) => {
        if (customer.custom_field_1! === user.auth.session?.id) {
          setVendCustomerId(customer.id);
          return;
        }
      });
    }
  }, [customers.status.list, user.auth.status, user.auth.session?.id]);

  return {
    customers,
  };
}

export { useVend };

import React from 'react';

import { useVendCustomers } from './hooks/useVendCustomers';
import { useUser } from '../user/useUser';

function useVend() {
  const user = useUser();
  const [vendCustomerId, setVendCustomerId] = React.useState<string>('');
  const customers = useVendCustomers(vendCustomerId);

  // converts WordPress ID to Vend ID
  React.useEffect(() => {
    if (
      user.auth.session &&
      user.auth.status !== 'loading' &&
      customers.status.list !== 'loading' &&
      customers.list
    ) {
      customers.list.forEach((customer) => {
        if (customer.custom_field_2 === user.auth.session?.id.toString()) {
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

import { Vend } from '../vend.model';
import { QueryClient, useMutation } from 'react-query';
import { useVendCustomerData, useVendCustomersData } from '../queries';
import { VendCustomerResponse, VendCustomerUpdateToken } from '../types';
import { Queries } from '../../../utils/keys';

function useVendCustomers(id: string) {
  const model = new Vend();
  const queryClient = new QueryClient();
  const {
    status: singleStatus,
    data: customer,
    error: singleError,
  } = useVendCustomerData(id);
  const {
    status: listStatus,
    data: customers,
    error: listError,
  } = useVendCustomersData();

  async function create(
    firstname: string,
    lastname: string,
    email: string,
  ): Promise<VendCustomerResponse> {
    const customer = model.checkCustomerExists(email, customers!);
    if (!customer) {
      return await model.createCustomer({
        first_name: firstname,
        last_name: lastname,
        email,
      });
    }
    return customer;
  }

  const update = useMutation(
    (newValue: VendCustomerUpdateToken) =>
      model.updateCustomer(newValue.id, newValue.token),
    {
      onSuccess: (customer) => {
        queryClient.setQueryData(Queries.VEND_CUSTOMER, customer);
      },
    },
  );

  return {
    current: customer,
    error: {
      current: singleError,
      list: listError,
    },
    list: customers,
    status: {
      current: singleStatus,
      list: listStatus,
    },
    create,
    update,
  };
}

export { useVendCustomers };

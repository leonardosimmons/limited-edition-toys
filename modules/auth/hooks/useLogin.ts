import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { useMutation, useQueryClient } from 'react-query';
import { WooCommerceCustomer } from '../../woocommerce/types';
import { UserLoginCredentials } from 'modules/user/types';
import { Queries } from '../../../utils/keys';
import { LoginStatus } from '../types';

import { updateAuthLoginStatus } from '../actions';
import { appSelector } from '../../../src/redux/selector';
import { Wordpress } from '../../wordpress/wordpress.model';
import { useWooCommerce } from '../../woocommerce/useWooCommerce';

function useLogin() {
  const wordpress = new Wordpress();
  const dispatch = useAppDispatch();
  const woocommerce = useWooCommerce();
  const queryClient = useQueryClient();
  const ctx = useAppSelector(appSelector);
  const [error, setError] = React.useState<any>();

  function updateLoginStatus(status: LoginStatus): void {
    dispatch(updateAuthLoginStatus(status));
  }

  async function signOut() {
    dispatch(updateAuthLoginStatus('guest'));
    await wordpress.logout();
  }

  const user = useMutation(
    (token: UserLoginCredentials) =>
      wordpress.login(token.username, token.password),
    {
      onSuccess: async (res) => {
        queryClient.setQueryData(Queries.WORDPRESS_USER, res.payload.user);
        const token: WooCommerceCustomer = {
          username: res.username,
          password: res.password,
          email: res.payload.user.email,
          first_name: res.payload.user.firstName,
          last_name: res.payload.user.lastName,
        };
        try {
          await woocommerce.customer.create(token);
          dispatch(updateAuthLoginStatus('signed-in'));
        } catch (err: any) {
          setError(err);
        }
      },
    },
  );

  return {
    error,
    signOut,
    status: ctx.auth.status,
    user: user.mutate,
    update: updateLoginStatus,
  };
}

export { useLogin };

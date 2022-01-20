import { useAppDispatch, useAppSelector } from 'src/redux';
import { useMutation, useQueryClient } from 'react-query';
import { LoginStatus } from '../types';
import { UserLoginCredentials } from 'modules/user/types';
import { Queries } from '../../../utils/keys';

import { updateAuthLoginStatus } from '../actions';
import { appSelector } from '../../../src/redux/selector';
import { Wordpress } from '../../wordpress/wordpress.model';
import { useVend } from '../../vend/useVend';

function useLogin() {
  const vend = useVend();
  const wpModel = new Wordpress();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const ctx = useAppSelector(appSelector);

  function updateLoginStatus(status: LoginStatus): void {
    dispatch(updateAuthLoginStatus(status));
  }

  async function signOut() {
    dispatch(updateAuthLoginStatus('guest'));
    await wpModel.logout();
  }

  const user = useMutation(
    (token: UserLoginCredentials) =>
      wpModel.login(token.username, token.password),
    {
      onSuccess: async (res) => {
        queryClient.setQueryData(Queries.WORDPRESS_USER, res.payload.user);
        await vend.customers.create(res.payload.user.firstName, res.payload.user.lastName, res.payload.user.email);
        dispatch(updateAuthLoginStatus('signed-in'));
      },
    },
  );

  return {
    signOut,
    status: ctx.auth.status,
    user: user.mutate,
    update: updateLoginStatus,
  };
}

export { useLogin };

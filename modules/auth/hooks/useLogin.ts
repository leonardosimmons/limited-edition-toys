import { useAppDispatch, useAppSelector } from 'src/redux';
import { LoginStatus } from '../types';
import { RouteConfirmation } from 'utils/types';
import { UserLoginCredentials } from 'modules/user/types';

import { updateAuthLoginStatus } from '../actions';
import { authSelector } from '../selectors';
import { Wordpress, WordpressModel } from '../../wordpress/wordpress.model';

function useLogin() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(authSelector);
  const wordpress: Wordpress = new WordpressModel();

  function updateLoginStatus(status: LoginStatus): void {
    dispatch(updateAuthLoginStatus(status));
  }

  async function signOut() {
    await wordpress.logout();
    dispatch(updateAuthLoginStatus('guest'));
  }

  async function user(token: UserLoginCredentials): Promise<RouteConfirmation> {
    return await wordpress.login(token.username, token.password);
  }

  return {
    signOut,
    status: ctx.status,
    user,
    update: updateLoginStatus,
  };
}

export { useLogin };

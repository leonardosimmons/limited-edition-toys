import axios, { AxiosResponse } from 'axios';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { LoginStatus } from '../types';
import { RouteConfirmation } from 'utils/types';
import { UserLoginCredentials } from 'modules/user/types';

import { updateAuthLoginStatus } from '../actions';
import { authSelector } from '../selectors';

function useLogin() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(authSelector);

  function updateLoginStatus(status: LoginStatus): void {
    dispatch(updateAuthLoginStatus(status));
  }

  async function signOut(): Promise<RouteConfirmation> {
    try {
      const response: AxiosResponse<RouteConfirmation> = await axios
        .delete('/api/auth/session', { data: {}});
      if (response.data) {
        dispatch(updateAuthLoginStatus('guest'));
        return response.data
      } else {
        return { message: 'unable to logout user'}
      }
    } catch (err) {
      throw new Error('Unable to logout user')
    }
  }

  async function user(token: UserLoginCredentials): Promise<RouteConfirmation> {
    try {
      const response: AxiosResponse<RouteConfirmation> = await axios.post(
        '/api/auth/login/user',
        {
          username: token.username,
          password: token.password,
        },
      );
      return response.data;
    } catch (err) {
      throw new Error('Unable to login user');
    }
  }

  return {
    signOut,
    status: ctx.status,
    user,
    update: updateLoginStatus,
  };
}

export { useLogin };

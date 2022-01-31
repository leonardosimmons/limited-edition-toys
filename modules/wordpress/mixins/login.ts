import axios, { AxiosResponse } from 'axios';
import { Constructor, RouteConfirmation } from '../../../utils/types';

export function WordpressLoginModel<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    async login(username: string, password: string) {
      try {
        const response: AxiosResponse<RouteConfirmation> = await axios.post(
          '/api/auth/login/user',
          {
            username,
            password,
          },
        );
        return {
          ...response.data,
          username,
          password
        };
      } catch (err) {
        throw new Error('Unable to login user');
      }
    }

    async logout() {
      try {
        await axios.delete('/api/auth/session', { data: {} });
      } catch (err) {
        throw new Error('Unable to logout user');
      }
    }
  };
}

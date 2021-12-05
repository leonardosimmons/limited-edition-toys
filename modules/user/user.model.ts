import axios, { AxiosResponse } from 'axios';
import { RouteConfirmation } from 'utils/types';
import { UserSessionToken } from './types';

interface UserModelInterface {
  guestLogin(): Promise<UserSessionToken | RouteConfirmation | void>;
}

class UserModel implements UserModelInterface {
  public async guestLogin() {
    return await axios
      .get('/api/auth/login/guest')
      .then(
        (res: AxiosResponse<UserSessionToken | RouteConfirmation>) => res.data,
      )
      .catch((err: any) => {
        throw new Error(err);
      });
  }
}

export { UserModel };

import axios, { AxiosResponse } from 'axios';
import { Default } from 'utils/keys';
import { RouteConfirmation } from 'utils/types';
import { UserSessionToken } from './types';

interface UserModelInterface {
  guestLogin(): Promise<any>;
  logout(): Promise<RouteConfirmation>;
}

class UserModel implements UserModelInterface {
  public async guestLogin() {
    return await axios
      .get('/api/auth/login/guest')
      .then((res: any) => res.data)
      .catch((err) => console.log(err));
  }

  public async logout(): Promise<RouteConfirmation> {
    return await axios
      .get('/api/user/logout')
      .then((res: AxiosResponse<any>) => res.data)
      .catch((err) => console.log(err));
  }
}

export { UserModel };

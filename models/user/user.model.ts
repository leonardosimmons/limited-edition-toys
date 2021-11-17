import axios, { AxiosResponse } from 'axios';
import { Default } from 'utils/keys';
import { RouteConfirmation } from 'utils/types';
import { UserSessionToken } from './types';

interface UserModelInterface {
  logout(): Promise<any>;
}

class UserModel implements UserModelInterface {
  public async logout(): Promise<RouteConfirmation> {
    return await axios
      .get('/api/user/logout')
      .then((res: AxiosResponse<any>) => res.data)
      .catch((err) => console.log(err));
  }
}

export { UserModel };

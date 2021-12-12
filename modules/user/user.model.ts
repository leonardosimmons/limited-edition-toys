import axios, { AxiosResponse } from 'axios';
import { RouteConfirmation } from 'utils/types';

interface UserModelInterface {
  guestLogin(): Promise<any | RouteConfirmation | void>;
}

class UserModel implements UserModelInterface {
  public async guestLogin() {
    return await axios
      .get('/api/auth/login/guest')
      .then((res: AxiosResponse<any | RouteConfirmation>) => res.data)
      .catch((err: any) => {
        throw new Error(err);
      });
  }
}

export { UserModel };

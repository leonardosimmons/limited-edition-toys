import axios, { AxiosResponse } from 'axios';
import { UserSessionToken } from 'models/user/types';

interface AuthorizationModelInterface {
  getCurrentSession: () => Promise<UserSessionToken>;
}

class AuthorizationModel implements AuthorizationModelInterface {
  public async getCurrentSession(): Promise<UserSessionToken> {
    return await axios
      .get('/api/auth/session')
      .then((res: AxiosResponse<UserSessionToken>) => {
        return res.data;
      });
  }
}

export { AuthorizationModel };

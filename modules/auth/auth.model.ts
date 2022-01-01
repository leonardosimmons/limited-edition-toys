import axios, { AxiosResponse } from 'axios';
import { AuthSessionToken } from './types';

interface AuthorizationModelInterface {
  getAuthSession: () => Promise<AuthSessionToken>;
}
class AuthorizationModel implements AuthorizationModelInterface {
  /**
   * Returns the Auth user session
   * @returns
   */
  public async getAuthSession(): Promise<AuthSessionToken> {
    return await axios
      .get('/api/auth/session')
      .then((res: AxiosResponse<AuthSessionToken>) => res.data);
  }
}

export { AuthorizationModel };

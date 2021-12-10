import jwt from 'jsonwebtoken';
import axios, { AxiosResponse } from 'axios';
import { nanoid } from 'nanoid';

import { UserRoles, UserAccessToken } from 'modules/user/types';
import { CLIENT_JWT_SECRET } from 'lib/constants';
import { Expiration, PermissionLevel } from './auth.config';

interface AuthorizationModelInterface {
  createAccessToken: (role: UserRoles, sub?: string) => string;
  getCurrentSession: () => Promise<UserAccessToken>;
  setPermissionLevel: (role: UserRoles) => PermissionLevel;
}

class AuthorizationModel implements AuthorizationModelInterface {
  public createAccessToken(role: UserRoles, sub?: string): string {
    return jwt.sign(
      {
        data: {
          sub: sub || nanoid(),
          permissionLevel: this.setPermissionLevel(role as UserRoles),
        },
      },
      CLIENT_JWT_SECRET,
      { expiresIn: Expiration.ACCESS_TOKEN },
    );
  }

  /**
   * Returns the current user session
   * @returns
   */
  public async getCurrentSession(): Promise<UserAccessToken> {
    return await axios
      .get('/api/auth/session')
      .then((res: AxiosResponse<UserAccessToken>) => {
        return res.data;
      });
  }

  public setPermissionLevel(role: UserRoles): PermissionLevel {
    switch (role) {
      default:
        return PermissionLevel.GUEST;
    }
  }
}

export { AuthorizationModel };

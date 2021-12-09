import jwt from 'jsonwebtoken';
import axios, { AxiosResponse } from 'axios';
import { nanoid } from 'nanoid';

import { UserRoles, UserAccessToken } from 'modules/user/types';
import {
  ADMIN_JWT_SECRET,
  GUEST_JWT_SECRET,
  USER_JWT_SECRET,
  VENDOR_JWT_SECRET,
} from 'lib/constants';
import { Expiration, PermissionLevel } from './auth.config';

interface AuthorizationModelInterface {
  createAccessToken: (role: UserRoles, sub?: string) => string;
  getCurrentSession: () => Promise<UserAccessToken>;
  getJWTSecret: (role?: UserRoles) => string;
  setPermissionLevel: (role: UserRoles) => PermissionLevel;
}

class AuthorizationModel implements AuthorizationModelInterface {
  public createAccessToken(role: UserRoles, sub?: string): string {
    const secret = this.getJWTSecret(role);
    return jwt.sign(
      {
        data: {
          sub: sub || nanoid(),
          permissionLevel: this.setPermissionLevel(role as UserRoles),
        },
      },
      secret,
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

  /**
   * Returns the appropriate based on the role provided
   * @param role
   */
  public getJWTSecret(role?: UserRoles): string {
    switch (role) {
      case 'administrator':
        return ADMIN_JWT_SECRET;
      case 'subscriber':
        return USER_JWT_SECRET;
      case 'vendor':
        return VENDOR_JWT_SECRET;
      default:
        return GUEST_JWT_SECRET;
    }
  }

  public setPermissionLevel(role: UserRoles): PermissionLevel {
    switch (role) {
      default:
        return PermissionLevel.GUEST;
    }
  }
}

export { AuthorizationModel };

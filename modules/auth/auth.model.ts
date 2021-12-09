import jwt from 'jsonwebtoken';
import axios, { AxiosResponse } from 'axios';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

import { UserRoles, UserSessionToken } from 'modules/user/types';
import {
  ADMIN_JWT_SECRET,
  GUEST_JWT_SECRET,
  USER_JWT_SECRET,
  VENDOR_JWT_SECRET,
  ACCESS_TOKEN,
} from 'lib/constants';
import { jsonResponse } from 'lib';
import { PermissionLevel } from './auth.config';

interface AuthorizationModelInterface {
  getCurrentSession: () => Promise<UserSessionToken>;
}

class AuthorizationModel implements AuthorizationModelInterface {
  /**
   * Returns the current user session
   * @returns
   */
  public async getCurrentSession(): Promise<UserSessionToken> {
    return await axios
      .get('/api/auth/session')
      .then((res: AxiosResponse<UserSessionToken>) => {
        return res.data;
      });
  }

  /**
   * Returns the appropriate based on the role provided
   * @param role
   */
  public getJWTSecret(role?: UserRoles) {
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

  /**
   * Adds the user token cookie to a response
   * @param req
   * @param res
   * @returns
   */
  public async setUserCookie(
    req: NextRequest,
    res: NextResponse,
    role?: UserRoles,
  ) {
    const cookie = req.cookies[ACCESS_TOKEN];
    if (!cookie) {
      const secret = this.getJWTSecret(role);
      const token = jwt.sign(
        {
          data: {
            id: nanoid(),
            permissionLevel: this.setPermissionLevel(role as UserRoles),
          },
        },
        secret,
        { expiresIn: '5min' },
      );
      res.cookie(ACCESS_TOKEN, token, { httpOnly: true, maxAge: 300 });
    }
    return res;
  }

  /**
   * Verifies the user's JWT
   * @param req
   * @returns
   */
  public async verifyAuth(req: NextRequest, role?: UserRoles) {
    const token = req.cookies[ACCESS_TOKEN];
    if (!token) {
      return jsonResponse(401, { error: { message: 'Missing user token' } });
    }

    try {
      const secret = this.getJWTSecret(role);
      //const verified = await jwtVerify(token, new TextEncoder().encode(secret));
      //return verified.payload as UserJWTPayload;
    } catch (err) {
      return jsonResponse(401, {
        error: { message: 'Your token has expired' },
      });
    }
  }
}

export { AuthorizationModel };

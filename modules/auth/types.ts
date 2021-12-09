import { CartSessionToken } from 'modules/cart/types';
import { UserAccessToken } from 'modules/user/types';

export type AccessToken = {
  data: UserAccessToken;
  exp: number;
  iat: number;
};

export type UserRegistrationToken = {
  username: string;
  email: string;
  password: string;
  checkPw: string;
};

export type UserSignInToken = {
  email: string;
  password: string;
};

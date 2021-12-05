import { CartSessionToken } from 'modules/cart/types';

export type UserLoginCredentials = {
  username: string;
  password: string;
};

export type UserOptions = {
  redirectTo?: string;
  redirectIfFound?: boolean;
};

export type UserRoles =
  | 'administrator'
  | 'affiliate'
  | 'customer'
  | 'guest'
  | 'store vendor'
  | 'subscriber'
  | 'vendor';

export type UserSessionToken = {
  sub: string;
  permissionLevel: number;
};

export type User = {
  id: number;
  username: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  url: string;
  description: string;
  link: string;
  locale: string;
  nickname: string;
  slug: string;
  registeredDate: string;
  roles: UserRoles[];
  password?: string;
  capabilities?: object;
  extraCapabilites?: object;
  avatarUrls?: object;
  meta?: object;
};

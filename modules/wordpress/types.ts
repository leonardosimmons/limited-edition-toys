import { UserRoles } from '../user/types';

export type WpUserSignInResponse = {
  token: string;
  id: number;
  email: string;
  displayName: string;
  firstName?: string;
  lastName?: string;
  nicename?: string;
};

export type WpUser = {
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
  extraCapabilities?: object;
  avatarUrls?: object;
  meta?: object;
};
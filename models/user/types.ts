export type UserRoles =
  | 'administrator'
  | 'affiliate'
  | 'customer'
  | 'store vendor'
  | 'subscriber'
  | 'vendor';

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

import { UserRoles } from '../user/types';

export type WordpressAvatarUrl = {
  24: string;
  48: string;
  96: string;
}

export type WordpressUser = {
  id: number;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  url: string;
  description: string;
  link: string;
  locale: string;
  nickname: string;
  slug: string;
  registered_date: string;
  roles: UserRoles[];
  is_super_admin: boolean,
  password?: string;
  capabilities?: object;
  extra_capabilities?: object;
  avatarUrls?: WordpressAvatarUrl;
  meta?: [];
};
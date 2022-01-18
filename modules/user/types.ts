export type UserLoginCredentials = {
  username: string;
  password: string;
};

export type UserRoles =
  | 'administrator'
  | 'affiliate'
  | 'customer'
  | 'guest'
  | 'store vendor'
  | 'subscriber'
  | 'vendor';

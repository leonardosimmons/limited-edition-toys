export type UserSignInResponse = {
  token: string;
  id: number;
  email: string;
  displayName: string;
  firstName?: string;
  lastName?: string;
  nicename?: string;
};

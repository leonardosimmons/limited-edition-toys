export type AuthSessionToken = {
  id: String;
  token: String;
  displayName: string;
};

export type UserRegistrationToken = {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  checkPw: string;
};

export type UserSignInToken = {
  username: string;
  password: string;
};

export type LoginStatus = 'guest' | 'signed-in';

export type UserRegistrationToken = {
  username: string;
  email: string;
  password: string;
  checkPw: string;
};

export type UserSignInToken = {
  username: string;
  password: string;
};

export type LoginStatus = 'guest' | 'signed-in';

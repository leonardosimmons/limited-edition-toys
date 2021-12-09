export type AuthTokens = {
  readonly id: string;
  readonly sub: string;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly permissionLevel: number;
};

export type UserJWTPayload = {
  jti: string;
  iat: number;
};

export type UserRegistrationToken = {
  username: string;
  email: string;
  password: string;
  checkPw: string;
}

export type UserSignInToken = {
  email: string;
  password: string;
};

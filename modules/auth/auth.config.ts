export enum PermissionLevel {
  GUEST = 0,
  USER = 2,
  VENDOR = 4,
  AFFILIATE = 8,
  ADMIN = 2048,
}

export enum Expiration {
  ACCESS_TOKEN = 180, // seconds
  SESSION_COOKIE = 180, // seconds
}

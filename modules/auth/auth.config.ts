export enum PermissionLevel {
  GUEST = 0,
  USER = 2,
  VENDOR = 4,
  AFFILIATE = 8,
  ADMIN = 2048,
}

export enum Expiration {
  ACCESS_TOKEN = 43200, // 12hrs (seconds)
  SESSION_COOKIE = 43200, // 12hrs (seconds)
}

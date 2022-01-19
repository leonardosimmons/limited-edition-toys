//* -------------------------------------------------
// JWT AUTH

export const ACCESS_TOKEN = 'letpdx-accessToken';
export const CLIENT_JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!;
export const JWT_SECRET = process.env.JWT_SECRET!;

//* -------------------------------------------------
// VEND

export const VEND_BASE_CUSTOMER_GROUP_ID =
  process.env.VEND_ALL_CUSTOMER_GROUP_ID!;
export const VEND_GUEST_ID = "02918194-9a16-11ec-e98e-79159c82939a";
export const VEND_ONLINE_CUSTOMER_GROUP_ID =
  process.env.VEND_ONLINE_CUSTOMER_GROUP_ID!;
export const VEND_OUTLET_ID = process.env.VEND_OUTLET_ID!;

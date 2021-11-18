import { Client, Environment } from 'square';

export const Square = new Client({
  environment:
    process.env.NODE_ENV === 'development'
      ? Environment.Sandbox
      : Environment.Production,
  accessToken: process.env.SQ_ACCESS_TOKEN,
});

export const squarePermissionScopes = ['ORDERS_WRITE', 'PAYMENTS_WRITE'];

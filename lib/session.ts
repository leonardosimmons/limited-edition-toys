import { IronSessionOptions } from 'iron-session';
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import { Expiration } from 'modules/auth/auth.config';
import { CartSessionToken } from 'modules/cart/types';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from 'next';
import { Key } from '../utils/keys';

declare module 'iron-session' {
  interface IronSessionData {
    auth: {
      id: number;
      token: string;
    };
    cart: CartSessionToken[];
  }
}

const sessionOptions: IronSessionOptions = {
  password: process.env.SESSION_COOKIE_SECRET as string,
  cookieName: Key.SESSION_COOKIES,
  cookieOptions: {
    maxAge: Expiration.SESSION_COOKIE,
    secure: process.env.NODE_ENV === 'production',
  },
};

export function withSessionApiRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown },
>(
  handler: (
    context: GetServerSidePropsContext,
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) {
  return withIronSessionSsr(handler, sessionOptions);
}

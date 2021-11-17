import { IronSessionOptions } from 'iron-session';
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import { CartSessionToken } from 'models/cart/types';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from 'next';
import type { UserSessionToken } from '../user/types';
import { Key } from '../../utils/keys';

declare module 'iron-session' {
  interface IronSessionData {
    user?: UserSessionToken;
    cart?: CartSessionToken[];
  }
}

const sessionOptions: IronSessionOptions = {
  password: process.env.SESSION_COOKIE_SECRET as string,
  cookieName: Key.SESSION_COOKIES,
  cookieOptions: { maxAge: undefined },
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

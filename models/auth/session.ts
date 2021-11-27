import { IronSessionOptions } from 'iron-session';
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from 'next';
import { Default, Key } from '../../utils/keys';

declare module 'iron-session' {
  interface IronSessionData {
    accessToken: string;
  }
}

const sessionOptions: IronSessionOptions = {
  password: process.env.SESSION_COOKIE_SECRET as string,
  cookieName: Key.SESSION_COOKIES,
  cookieOptions: {
    maxAge: parseInt(process.env.NEXT_PUBLIC_SESSION_TIMEOUT as string),
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

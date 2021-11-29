import axios from 'axios';
import { AuthTokens } from 'models/auth/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { Default } from 'utils/keys';
import { withSessionApiRoute } from '../../../../../models/auth/session';

export default withSessionApiRoute(guestLogin);

async function guestLogin(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const token: AuthTokens = await axios
          .post(process.env.GUEST_LOGIN as string, {
            username: Default.GUEST_LOGIN_USERNAME,
          })
          .then((res: any) => res.data);
        req.session.id = token.id;
        req.session.sub = token.sub;
        req.session.accessToken = token.accessToken;
        req.session.refreshToken = token.refreshToken;

        try {
          await req.session.save();
        } catch (err: any) {
          throw new Error(err);
        }

        res.status(200).json({ id: req.session.sub });
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}
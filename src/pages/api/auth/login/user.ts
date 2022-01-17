import { NextApiRequest, NextApiResponse } from 'next';
import { WordpressApi } from '../../../../../lib/wordpress';
import { withSessionApiRoute } from '../../../../../lib/session';
import { UserSignInToken } from 'modules/auth/types';

export default withSessionApiRoute(userLogin);

async function userLogin(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { username, password } = (await req.body) as UserSignInToken;
        const response = await WordpressApi.post('/jwt-auth/v1/token', {
          username,
          password,
        });
        const user = response.data;

        req.session.auth = {
          id: (user as any).data.id,
          token: (user as any).data.token,
          displayName: (user as any).data.displayName
        };
        await req.session.save();

        res.status(200).json({ ok: true });
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}

import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionApiRoute } from '../../../../../lib/session';
import { AuthorizationModel } from 'modules/auth/auth.model';
import { GUEST_JWT_SECRET } from 'lib/constants';

export default withSessionApiRoute(guestLogin);

async function guestLogin(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const model = new AuthorizationModel();
        const accessToken: string = model.createAccessToken('guest');

        req.session.auth = accessToken;

        try {
          await req.session.save();
        } catch (err: any) {
          throw new Error(err);
        }

        try {
          const decoded = jwt.verify(req.session.auth, GUEST_JWT_SECRET);
          res.status(200).json({
            result: decoded,
          });
        } catch (err: any) {
          throw new Error('Invalid token');
        }
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}

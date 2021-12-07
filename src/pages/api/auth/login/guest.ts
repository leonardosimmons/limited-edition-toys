import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionApiRoute } from '../../../../../lib/session';
import { nanoid } from 'nanoid';

export default withSessionApiRoute(guestLogin);

async function guestLogin(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        req.session.id = nanoid();
        req.session.permissionLevel = 0;

        try {
          await req.session.save();
        } catch (err: any) {
          throw new Error(err);
        }

        res.status(200).json({
          sub: req.session.sub,
          permissionLevel: req.session.permissionLevel,
        });
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}

import { withSessionApiRoute } from 'models/auth/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionApiRoute(sessionRoute);

async function sessionRoute(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.json({
        sub: req.session.sub,
        permissionLevel: req.session.permissionLevel,
      });
      break;
    default:
      res.status(405).end();
  }
}

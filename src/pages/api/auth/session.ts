import { withSessionApiRoute } from 'models/auth/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionApiRoute(sessionRoute);

async function sessionRoute(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      if (!req.session.sub) {
        res.send({ message: 'No current session' });
        return;
      }
      res.json(req.session.sub);
      break;
    default:
      res.status(405).end();
  }
}

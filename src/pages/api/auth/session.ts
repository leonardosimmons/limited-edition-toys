import { withSessionApiRoute } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionApiRoute(authSessionRoute);

async function authSessionRoute(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.json(req.session.auth);
      break;
    case'DELETE':
      req.session.destroy();
      res.status(200).json({ ok: true })
      break;
    default:
      res.status(405).end();
  }
}

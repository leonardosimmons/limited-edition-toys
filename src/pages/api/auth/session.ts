import { withSessionApiRoute } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionApiRoute(sessionRoute);

async function sessionRoute(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.json({ ok: true });
      break;
    default:
      res.status(405).end();
  }
}

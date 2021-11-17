import { withSessionApiRoute } from 'models/auth/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { IronSession } from 'iron-session';

export default withSessionApiRoute(logoutRoute);

async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session.user) {
    res.send({ message: 'No user is currently logged in' });
  }

  req.session.destroy();
  res.send({ ok: true });
}

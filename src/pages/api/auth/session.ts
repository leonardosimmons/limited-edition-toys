import { withSessionApiRoute } from 'models/auth/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionApiRoute(sessionRoute);

async function sessionRoute(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session) {
    res.send({ message: 'No current session' });
    return;
  }
  res.json({ token: req.session.accessToken });
}

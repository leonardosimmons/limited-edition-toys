import { withSessionApiRoute } from 'models/auth/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionApiRoute(userRoute);

async function userRoute(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session.user) {
    res.send({ message: 'No current user session' });
    return;
  }
  res.send({ user: req.session.user });
}

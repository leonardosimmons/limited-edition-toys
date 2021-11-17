import { withSessionApiRoute } from 'models/auth/session';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionApiRoute(cartRoute);

async function cartRoute(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session.cart) {
    res.send({ message: 'No current cart session' });
    return;
  }
  res.send({ cart: req.session.cart });
}

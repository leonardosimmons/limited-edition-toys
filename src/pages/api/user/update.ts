import { CartSessionToken } from 'models/cart/types';
import { UserRoles } from 'models/user/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { Default } from 'utils/keys';
import { generateRandomNum } from '../../../../lib';
import { withSessionApiRoute } from '../../../../models/auth/session';

export default withSessionApiRoute(update);

async function update(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session.user) {
    res.send({ message: 'Not Authorized' });
  }

  if (req.method === 'POST') {
    const { cart, key, value } = await req.body;

    if (cart) {
      req.session.cart = cart as CartSessionToken[];
    } else if (key && value) {
      req.session.user = {
        ...req.session.user!,
        [key]: value,
      };

      await req.session.save();
      res.send(cart ? { cart: req.session.cart } : { user: req.session.user });
    }
  }
}

import { withSessionApiRoute } from 'lib/session';
import { CartSessionToken } from 'modules/cart/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default withSessionApiRoute(cartSession);

async function cartSession(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(req.session.cart);
      break;
    case 'POST':
      const token = (await req.body) as CartSessionToken;
      const buffer = req.session.cart || ([] as CartSessionToken[]);
      buffer.push(token);
      req.session.cart = buffer;
      await req.session.save();
      res.status(200).json({ cart: req.session.cart });
      break;
    case 'PATCH':
      const { sku, quantity } = (await req.body) as CartSessionToken;
      req.session.cart.forEach((item) => {
        if (item.sku === sku) {
          item.quantity = quantity;
        }
      });
      await req.session.save();
      res.status(200).json({ cart: req.session.cart });
      break;
    case 'DELETE':
      req.session.cart = req.session.cart.filter(
        (item) => item.sku !== req.body.sku,
      );
      await req.session.save();
      res.status(200).json({ cart: req.session.cart });
      break;
    default:
      res.status(405).end('Method not allowed');
      break;
  }
}

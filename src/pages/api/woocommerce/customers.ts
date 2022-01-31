import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionApiRoute } from '../../../../lib/session';
import { ErrorCode } from '../../../../utils/keys';
import { WooCommerceApi } from '../../../../lib';

export default withSessionApiRoute(customers);

async function customers(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        if (req.query.id) {
          const response = await WooCommerceApi.get(
            `customers/${req.query.id}`,
          );
          const customer = response.data;
          res.status(200).json({ ...customer });
        } else {
          const response = await WooCommerceApi.get('customers');
          const customers = response.data;
          res.status(200).json({ customers });
        }
      } catch (err: any) {
        res.status(403).json({ msg: err.response.data });
      }
      break;
    case 'POST':
      const { token } = await req.body;
      try {
        const response = await WooCommerceApi.post('customers', token);
        const customer = response.data;
        console.log('new customer:', customer);
        res.status(200).json({ customer });
      } catch (err: any) {
        if (err.response.data.code === ErrorCode.WOOCOMMERCE_EMAIL_EXISTS) {
          res.status(200).json({ token });
          break;
        }
        res.status(403).json({ msg: err.response.data });
      }
      break;
    case 'PUT':
      try {
        const { id, token } = await req.body;
        const response = await WooCommerceApi.put(`customers/${id}`, token);
        const updatedCustomer = response.data;
        console.log('updated', updatedCustomer);
        res.status(200).json({ customer: updatedCustomer });
      } catch (err: any) {
        console.log(err.response.data);
        res.status(403).json({ msg: err.response.data });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}

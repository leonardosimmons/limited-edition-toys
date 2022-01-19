import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionApiRoute } from '../../../../lib/session';
import { WooCommerceApi } from '../../../../lib';

export default withSessionApiRoute(customers);

async function customers(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const response = await WooCommerceApi.get('customers');
        const customers = response.data;
        console.log('customers:', customers);
        res.status(200).json({ customers });
      } catch (err: any) {
        console.log(err.response.data);
        res.status(403).json({ msg: err.response.data });
      }
      break;
    case 'POST':
      try {
        const { token } = await req.body;
        const response = await WooCommerceApi.post('customers', token);
        const customer = response.data;
        console.log('new customer:', customer);
        res.status(200).json({ customer });
      } catch (err: any) {
        console.log(err.response.data);
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

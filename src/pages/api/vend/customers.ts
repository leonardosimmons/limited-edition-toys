import { withSessionApiRoute } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { VendApi, VendResponse } from '../../../../lib';
import { VendCustomerResponse } from '../../../../modules/vend/types';

export default withSessionApiRoute(customers);

async function customers(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      if (req.query && req.query.id) {
        const id = req.query.id as string;
        const customer = await VendApi.get(`/customers/${id}`)
          .then((res: any) => res.data)
          .then((res: VendResponse<VendCustomerResponse[]>) => res.data);

        res.status(200).json({ ...customer });
      } else {
        const customers = await VendApi.get('/customers?page_size=1000')
          .then((res: any) => res.data)
          .then((res: VendResponse<VendCustomerResponse[]>) => res.data);

        res.status(200).json([...customers]);
      }
      break;
    case 'POST':
      try {
        const newCustomer = await VendApi.post('/customers', {
          first_name: req.body.first_name as string,
          last_name: req.body.last_name as string,
          email: req.body.email as string,
          custom_field_1: req.session.auth.displayName,
          custom_field_2: req.session.auth.id,
          customer_group_id: process.env.VEND_ONLINE_CUSTOMER_GROUP_ID as string
        })
          .then((res: any) => {
            return res.data
          })
          .then((res: VendResponse<VendCustomerResponse>) => res.data);

        res.status(200).json({ ...newCustomer });
      } catch (err: any) {
        res.status(400).json({ msg: `Unable to create new customer: ${err}` });
      }
      break;
    case 'PUT':
      try {
        const updatedCustomer = await VendApi.put(`/customers/${req.body.id}`, {
          ...req.body.token,
        })
          .then((res: any) => res.data)
          .then((res: VendResponse<VendCustomerResponse>) => res.data);

        res.status(200).json({ ...updatedCustomer  });
      }
      catch(err: any) {
        res.status(400).json({ err })
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}

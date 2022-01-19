import { withSessionApiRoute } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { VendApi, VendResponse } from '../../../../lib';
import { VendCustomerResponse } from '../../../../modules/vend/types';

export default withSessionApiRoute(customers);

async function customers(req: NextApiRequest, res: NextApiResponse) {
  const { id, token } = req.body;
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

        res.status(200).json([ ...customers ]);
      }
      break;
    case 'POST':
      const newCustomer = await VendApi.post('/customers', { token })
        .then((res: any) => res.data)
        .then((res: VendResponse<VendCustomerResponse>) => res.data)

      res.status(200).json({ ...newCustomer })
      break;
    case 'PUT':
      const updatedCustomer = await VendApi.put(`/customers/${id}`, { token })
        .then((res: any) => res.data)
        .then((res: VendResponse<VendCustomerResponse>) => res.data)

      res.status(200).json({ ...updatedCustomer })
      break;
    default:
      res.status(405).end();
      break;
  }
}

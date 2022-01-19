import { VendApi, VendResponse } from 'lib';
import { VEND_BASE_CUSTOMER_GROUP_ID, VEND_OUTLET_ID } from 'lib/constants';
import { VendDiscount } from 'modules/vend/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    // get All discounts
    case 'GET':
      res.status(200).json(
        await VendApi.get('/promotions')
          .then((res: any) => res.data)
          .then((res: VendResponse<any>) => res.data)
          .catch((err: any) => {
            throw new Error(err);
          }),
      );
      break;
    // Apply discounts to order
    case 'POST':
      try {
        const { order } = await req.body;
        const token: VendDiscount = {
          ...order,
          customer: {
            customer_group_id: VEND_BASE_CUSTOMER_GROUP_ID,
          },
          outlet_id: VEND_OUTLET_ID,
        };
        console.log('token:', token);
        res.status(200).json(
          await VendApi.post('/discount', token)
            .then((res) => res.data)
            .then((res: any) => res.data),
        );
      } catch (err) {
        console.log(err);
        res.status(400).json({ err });
      }
      break;
    default:
      res.status(405).json({
        message: 'This method is not allowed on this route',
      });
      break;
  }
};

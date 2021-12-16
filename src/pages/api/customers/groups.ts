import { Vend, VendResponse } from 'lib';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        res.status(200).json(
          await Vend.get('/customer_groups')
            .then((res) => res.data)
            .then((res: VendResponse<any>) => res.data),
        );
      } catch (err) {
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

import { Vend, VendResponse } from 'lib';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json(
        await Vend.get('/promotions')
          .then((res: any) => res.data)
          .then((res: VendResponse<any>) => res.data)
          .catch((err: any) => {
            throw new Error(err);
          }),
      );
      break;
    default:
      res.status(405).json({
        message: 'This method is not allowed on this route',
      });
      break;
  }
};

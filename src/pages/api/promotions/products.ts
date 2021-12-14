import { Vend, VendResponse } from 'lib';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const id: string = req.query.id as string;
      res.status(200).json(
        await Vend.get(`/promotions/${id}/products`)
          .then((res: any) => res.data)
          .then((res: VendResponse<any>) => console.log(res.data))
          .catch((err: any) => {
            console.log(err);
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

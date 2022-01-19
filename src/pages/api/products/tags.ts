import { VendApi, VendResponse } from 'lib';
import { ProductType } from 'modules/product/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'This method is not allowed on this route',
    });
  }

  return res.json(
    await VendApi.get('/tags')
      .then((res) => res.data)
      .then((vend: VendResponse<ProductType>) => vend.data),
  );
};

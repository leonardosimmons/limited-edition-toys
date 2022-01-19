import { VendApi, VendResponse } from 'lib';
import { Product } from 'modules/product/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'This method is not allowed on this route',
    });
  }

  if (req.query && req.query.id) {
    const id: string = req.query.id as string;

    return res.json(
      await VendApi.get(`/products/${id}`)
        .then((res) => res.data)
        .then((vend: VendResponse<Product>) => vend),
    );
  } else {
    return res.json({
      message: 'No product ID was provided',
    });
  }
};

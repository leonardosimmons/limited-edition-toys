import { VendApi, VendResponse } from 'lib';
import { Product } from 'modules/product/types';
import { NextApiRequest, NextApiResponse } from 'next';
import { Default } from 'utils/keys';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'This method is not allowed on this route',
    });
  }

  if (req.query.version && req.query.page_size) {
    const pageSize: string = req.query.page_size as string;
    const version: string = req.query.version as string;

    res.json(
      await VendApi.get(`/products?after=${version}&page_size=${pageSize}`)
        .then((res) => res.data)
        .then((vend: VendResponse<Product[]>) => vend),
    );
  } else {
    res.json(
      await VendApi.get(`/products?page_size=${Default.MAX_PRODUCTS_PER_QUERY}`)
        .then((res) => res.data)
        .then((vend: VendResponse<Product[]>) => vend),
    );
  }
};

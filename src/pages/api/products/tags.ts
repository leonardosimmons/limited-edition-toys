import { Vend, VendResponse } from 'lib';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'This method is not allowed on this route',
    });
  }

  res.json(
    await Vend.get('/tags?page_size=12')
      .then((res) => res.data)
      .then((vend: VendResponse) => vend.data),
  );
};

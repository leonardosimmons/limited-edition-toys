import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError, CreateCheckoutRequest } from 'square';
import { Square } from 'lib/square';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  try {
    const { checkoutApi } = Square;
    const { token } = await req.body;

    const response = await checkoutApi.createCheckout(
      process.env.SQUARE_SQUARE_LOCATION_ID as string,
      token as CreateCheckoutRequest,
    );

    res.status(200).send(response);
  } catch (err) {
    if (err instanceof ApiError) {
      res.status(err.statusCode).send({
        message: `There was an error in your request: ${err.errors}`,
      });
    } else {
      res.status(400).send({
        message: `Unexpected Error: ${err}`,
      });
    }
  }
};

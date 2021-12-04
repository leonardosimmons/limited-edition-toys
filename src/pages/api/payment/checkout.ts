import axios from 'axios';
import { ApiError } from 'square';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionApiRoute } from 'lib/session';
import { SquareCheckoutToken } from 'models/square/types';

export default withSessionApiRoute(checkoutRoute);

async function checkoutRoute(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { info, items } = await req.body;
        try {
          const response = await axios
            .post(
              `${process.env.SQUARE_CHECKOUT_API as string}/create`,
              {
                info,
                items,
              },
              {
                headers: {
                  authorization: req.session.accessToken || '',
                },
              },
            )
            .then((res) => res.data);
          console.log('final response:', response);
          res.status(200).json(response);
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
      } catch (err) {
        res.status(500).send({ message: 'No request body found' });
      }
      break;
    default:
      res.status(500).send({ message: `${req.method} is not a valid method` });
      break;
  }
}

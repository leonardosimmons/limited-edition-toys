import axios from 'axios';
import { ApiError } from 'square';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionApiRoute } from 'models/auth/session';

export default withSessionApiRoute(checkoutRoute);

async function checkoutRoute(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { token } = await req.body;
        try {
          const response = await axios
            .post(
              `${process.env.SQUARE_CHECKOUT_API!}/create`,
              {
                token,
              },
              {
                headers: {
                  authorization: req.session.accessToken || '',
                },
              },
            )
            .then((res) => res.data);
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

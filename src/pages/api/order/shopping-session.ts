import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionApiRoute } from 'lib/session';

export default withSessionApiRoute(shoppingSessionRoutes);

async function shoppingSessionRoutes(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      try {
        const response = await axios
          .post(
            `${process.env.ORDER_API as string}/session/create`,
            {
              id: req.session.id,
            },
            {
              headers: {
                authorization: req.session.accessToken || '',
              },
            },
          )
          .then((res) => res.data);
        res.status(200).json({ response });
      } catch (err) {
        console.log(err);
        res
          .status(400)
          .send({ message: 'unable to initalize new shoping session!' });
      }
      break;
    default:
      res.status(500).send({ message: `${req.method} is not a valid method` });
      break;
  }
}

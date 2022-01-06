import { withSessionApiRoute } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { Wordpress } from '../../../../lib/wordpress';

export default withSessionApiRoute(user);

async function user(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const { id, token } = req.session.auth;
      const response = await Wordpress.get(`/wp/v2/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = response.data

      res.status(200).json({
        user
      })
      break;
    default:
      res.status(405).end();
  }
}

import { withSessionApiRoute } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { WordpressApi } from '../../../../lib/wordpress';

export default withSessionApiRoute(user);

async function user(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const { id, token } = req.session.auth;
      const response = await WordpressApi.get(`/wp/v2/users/${id}?context=edit`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = response.data;

      res.status(200).json({
        user,
      });
      break;
    default:
      res.status(405).end();
  }
}

import { withSessionApiRoute } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { WordpressApi } from '../../../../lib/wordpress';

export default withSessionApiRoute(user);

async function user(req: NextApiRequest, res: NextApiResponse) {
  const { id, token } = req.session.auth;
  switch (req.method) {
    case 'GET':
      const getResponse = await WordpressApi.get(
        `/wp/v2/users/${id}?context=edit`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const user = getResponse.data;

      res.status(200).json({ user });
      break;
    case 'POST':
      console.log('made it')
      const { key, value } = await req.body;
      try {
        const postResponse = await WordpressApi.post(
          `/wp/v2/users/${id}?context=edit`,
          {
            [key]: value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const update = postResponse.data;
        res.status(200).json({ update });
      }
      catch(err: any) {
        console.log(err)
      }

      break;
    default:
      res.status(405).end();
      break;
  }
}

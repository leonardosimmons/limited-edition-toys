import { withSessionApiRoute } from 'lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { WordpressApi } from '../../../../lib/wordpress';

export default withSessionApiRoute(user);

async function user(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      if(req.session && req.session.auth) {
        const getResponse = await WordpressApi.get(
          `/wp/v2/users/${req.session.auth.id}?context=edit`,
          {
            headers: {
              Authorization: `Bearer ${req.session.auth.token}`,
            },
          },
        );
        const user = getResponse.data;

        res.status(200).json({ user });
      } else {
        res.status(200).json({ ok: true })
      }
      break;
    case 'POST':
      const { key, value } = await req.body;
      try {
        const postResponse = await WordpressApi.post(
          `/wp/v2/users/${req.session.auth.id}?context=edit`,
          {
            [key]: value,
          },
          {
            headers: {
              Authorization: `Bearer ${req.session.auth.token}`,
            },
          },
        );
        const update = postResponse.data;
        res.status(200).json({ update });
      }
      catch(err: any) {
        res.status(400).json({ msg: `Unable to update user: ${err}`})
      }

      break;
    default:
      res.status(405).end();
      break;
  }
}

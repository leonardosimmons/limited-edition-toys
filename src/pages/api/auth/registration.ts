import { NextApiRequest, NextApiResponse } from 'next';
import { UserRegistrationToken } from 'modules/auth/types';

import { WordpressApi } from '../../../../lib/wordpress';
import { withSessionApiRoute } from '../../../../lib/session';

export default withSessionApiRoute(userRegistration);

async function userRegistration(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { firstname, lastname, username, email, password } =
          (await req.body) as Partial<UserRegistrationToken>;

        const response = await WordpressApi.post('/jwt-auth/v1/token', {
          username: process.env.WORDPRESS_EDITOR_UN as string,
          password: process.env.WORDPRESS_EDITOR_PW as string,
        });
        const data = response.data;
        const token = (data as any).data.token;

        try {
          const user = await WordpressApi.post(
            '/wp/v2/users',
            {
              username,
              email,
              password,
              first_name: firstname,
              last_name: lastname,
              roles: ['customer'],
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          res
            .status(200)
            .json({ ok: true, payload: { user: (user as any).data } });
        } catch (err: any) {
          res.status(400).json({ err })
        }
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}

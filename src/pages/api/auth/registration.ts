import { NextApiRequest, NextApiResponse } from 'next';
import { UserRegistrationToken } from 'modules/auth/types';

import { WordpressApi } from '../../../../lib/wordpress';
import { withSessionApiRoute } from '../../../../lib/session';

export default withSessionApiRoute(userRegistration);

async function userRegistration(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { username, email, password } =
          (await req.body) as Partial<UserRegistrationToken>;

        const response = await WordpressApi.post('/jwt-auth/v1/token', {
          username: process.env.WORDPRESS_EDITOR_UN as string,
          password: process.env.WORDPRESS_EDITOR_PW as string,
        });
        const data = response.data;
        const token = (data as any).data.token;

        try {
          const userResponse = await WordpressApi.post(
            '/wp/v2/users',
            {
              username,
              email,
              password,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          const name = userResponse.data.username;

          try {
            const loginResponse = await WordpressApi.post('/jwt-auth/v1/token', {
              username,
              password,
            });
            const login = loginResponse.data;

            req.session.auth = {
              id: (login as any).data.id,
              token: (login as any).data.token,
              displayName: (login as any).data.displayName
            };
            await req.session.save();

            res.status(200).json({
              auth: req.session.auth,
              user: name,
            });
          } catch (err: any) {
            throw new Error(err);
          }
        } catch (err: any) {
          throw new Error(err);
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}

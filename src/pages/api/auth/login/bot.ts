import { NextApiRequest, NextApiResponse } from 'next';

import { Wordpress } from '../../../../../lib/wordpress';
import { withSessionApiRoute } from '../../../../../lib/session';

export default withSessionApiRoute(botLogin);

async function botLogin(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const response = await Wordpress.post('/jwt-auth/v1/token', {
          username: process.env.WORDPRESS_EDITOR_UN as string,
          password: process.env.WORDPRESS_EDITOR_PW as string,
        });
        const bot = response.data;

        res.status(200).json({ token: (bot as any).data.token });
      } catch (err) {
        res.status(500).json({ message: err });
      }
      break;
    default:
      res.status(405).end();
      break;
  }
}

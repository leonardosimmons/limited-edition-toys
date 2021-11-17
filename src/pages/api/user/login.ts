import { NextApiRequest, NextApiResponse } from 'next';
import { Default } from 'utils/keys';
import { generateRandomNum } from '../../../../lib';
import { withSessionApiRoute } from '../../../../models/auth/session';

export default withSessionApiRoute(loginRoute);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.send({ message: 'Only POST requests are allowed' });
  }

  if (!req.session.user) {
    try {
      const { username, password } = await req.body;
      if (
        username === Default.GUEST_LOGIN_USERNAME &&
        password === Default.GUEST_LOGIN_PASSWORD
      ) {
        const unique: number = generateRandomNum(100000, 999999);
        req.session.user = {
          id: `guest-${unique}`,
          isLoggedIn: true,
          role: 'guest',
        };
      } else {
        // login to wp using provided credintials
      }
    } catch (err) {
      res.send({ message: 'Missing required parameters' });
      return;
    }
  } else {
    res.send({ message: 'User already logged in' });
    return;
  }

  await req.session.save();
  res.send({ user: req.session });
}

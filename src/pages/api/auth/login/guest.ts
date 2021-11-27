import axios from 'axios';
import { UserModel } from 'models/user/user.model';
import { NextApiRequest, NextApiResponse } from 'next';
import { Default } from 'utils/keys';
import { withSessionApiRoute } from '../../../../../models/auth/session';

export default withSessionApiRoute(guestLogin);

async function guestLogin(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.send({ message: 'Only GET requests are allowed' });
  }

  try {
    const token: any = await axios
      .post(process.env.GUEST_LOGIN as string, {
        username: Default.GUEST_LOGIN_USERNAME,
      })
      .then((res: any) => res.data)
      .catch((err) => console.log(err));

    console.log('Token: ', token);
    req.session.accessToken = token;

    await req.session.save();

    res.status(200).json(req.session);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

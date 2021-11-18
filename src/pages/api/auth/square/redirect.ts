import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError } from 'square';
import { Square } from 'lib/square';

const oauthInstance = Square.oAuthApi;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.query['response_type'] === 'code') {
      const { code } = req.query;

      try {
        const { result } = await oauthInstance.obtainToken({
          code: code as string,
          clientId: process.env.SQUARE_APP_ID as string,
          clientSecret: process.env.SQUARE_OAUTH_SECRET as string,
          grantType: 'authorization_code',
        });

        const { accessToken, refreshToken, expiresAt, merchantId } = result;

        res.status(200).send({
          access: accessToken,
          refresh: refreshToken,
          expires: expiresAt,
          merchant: merchantId,
        });
      } catch (err) {
        if (err instanceof ApiError) {
          res.status(err.statusCode).send(err.errors);
        } else {
          res.status(400).send('Unknown Error');
        }
      }
    } else {
      res.status(400).send({
        message: '"Unknown Parameters", Expected parameters were not returned',
      });
    }
  } catch (err) {
    if (err instanceof ApiError) {
      res.status(err.statusCode).send({
        message: `There was an error in your request: ${err.errors}`,
      });
    } else {
      res.status(400).send({
        message: `Unexpected Error: ${err}`,
      });
    }
  }
};

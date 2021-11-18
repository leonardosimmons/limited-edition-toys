import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError } from 'square';
import md5 from 'md5';
import { Square, squarePermissionScopes } from 'lib/square';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const basePath: string =
    (process.env.NODE_ENV as string) === 'development'
      ? (process.env.SQUARE_SANDBOX_API as string)
      : (process.env.SQUARE_PRODUCTION_API as string);

  try {
    const url: string =
      basePath +
      `/oauth2/authorize?client_id=${process.env.SQUARE_APP_ID}&` +
      `response_type=code&` +
      `scope=${squarePermissionScopes.join('+')}` +
      `&state=`;

    res.status(200).send({
      url: url,
    });
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

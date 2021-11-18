import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError, Location } from 'square';
import { Square } from 'lib/square';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const { locationsApi } = Square;
  try {
    let listLocationsResponse = await locationsApi.listLocations();
    let firstLocation: Location = listLocationsResponse.result.locations![0];

    res.status(200).send(firstLocation);
  } catch (err) {
    if (err instanceof ApiError) {
      res.status(400).send({
        message: `There was an error in your request: ${err.errors}`,
      });
    } else {
      res.status(400).send({
        message: `Unexpected Error: ${err}`,
      });
    }
  }
};

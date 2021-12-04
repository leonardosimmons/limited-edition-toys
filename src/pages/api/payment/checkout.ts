import { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import JSONbig from 'json-bigint';
import { withSessionApiRoute } from 'lib/session';
import { SquareCheckoutToken } from 'models/square/types';
import { SquareModel } from 'models/square/square.model';
import { Square } from 'lib/square';
import { CreateCheckoutRequest, Customer } from 'square';

export default withSessionApiRoute(checkoutRoute);

async function checkoutRoute(req: NextApiRequest, res: NextApiResponse) {
  const model = new SquareModel();
  switch (req.method) {
    case 'POST':
      const { info, items } = (await req.body) as SquareCheckoutToken;
      try {
        const locationId = await Square.locationsApi
          .listLocations()
          .then((location) => location.result.locations![0].id);

        const customer: Customer | undefined = await Square.customersApi
          .createCustomer(info)
          .then((res) => res.result.customer);

        const token: CreateCheckoutRequest = {
          idempotencyKey: nanoid(),
          order: {
            idempotencyKey: nanoid(),
            order: {
              locationId: locationId!,
              // referenceId: req.session.id,
              customerId: customer?.id,
              lineItems: items,
            },
          },
          //redirectUrl: process.env.SQUARE_CHECKOUT_REDIRECT,
          askForShippingAddress: true,
          prePopulateBuyerEmail: info.emailAddress,
          prePopulateShippingAddress: { ...info.address },
        };

        const response = await Square.checkoutApi
          .createCheckout(locationId!, JSONbig.parse(JSON.stringify(token)))
          .then((res) => res.result.checkout?.checkoutPageUrl);

        res.status(200).json(JSONbig.parse(JSON.stringify(response)));
      } catch (err) {
        model.apiError(err, res);
      }
      break;
    default:
      res.status(405).send({ message: `${req.method} not allowed` });
      break;
  }
}

import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ProductCheckoutToken } from '../../../modules/product/types';
import { CheckoutSuccessToken } from '../../../modules/checkout/types';
import { Square } from '../../../lib/square';
import { VendApi } from '../../../lib';
import { OrderLineItem } from 'square';

import Layout from 'src/containers/Layout/Layout';
import {
  CompletedMainContainer,
  CompletedTopBanner,
  ConfirmationBanner,
} from 'src/containers/pages/styles/CheckoutCompleted';

import Typography from '@mui/material/Typography';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

function CheckoutCompleted({
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <Layout title={'Limited Edition Toys | Checkout - Billing'}>
      <CompletedMainContainer maxWidth={false} disableGutters>
        <CompletedTopBanner>
          <CheckRoundedIcon />
          <Typography variant="caption">Order Placed Successfully</Typography>
        </CompletedTopBanner>
        <ConfirmationBanner>
          <Typography variant="h1">Confirmation</Typography>
        </ConfirmationBanner>
      </CompletedMainContainer>
    </Layout>
  );
}

export default CheckoutCompleted;

async function createProductCheckoutToken(
  name: string,
  item: OrderLineItem,
): Promise<ProductCheckoutToken> {
  return VendApi.get(`/products/${item.uid}`)
    .then((res: any) => res.data)
    .then((product: any) => {
      return {
        name,
        quantity: parseInt(item.quantity),
        price: product.data.price_excluding_tax.toString(),
      } as ProductCheckoutToken;
    });
}

async function validateCheckoutToken(
  name: string,
  item: OrderLineItem,
): Promise<ProductCheckoutToken | undefined> {
  if (item.name !== 'Shipping') {
    return await createProductCheckoutToken(name, item);
  }
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let buffer: ProductCheckoutToken[] = [];
  const transactionId = ctx.query.transactionId as string;
  let token: CheckoutSuccessToken = {} as CheckoutSuccessToken;

  const orderResponse = await Square.ordersApi
    .retrieveOrder(transactionId)
    .then((res) => res.result);
  if (!orderResponse.errors) {
    const customerResponse = await Square.customersApi
      .retrieveCustomer(orderResponse.order?.customerId!)
      .then((res) => res.result);

    if (!customerResponse.errors) {
      await Promise.all(
        orderResponse.order!.lineItems!.map((item) =>
          validateCheckoutToken(
            `${customerResponse.customer!
              .givenName!} ${customerResponse.customer!.familyName!}`,
            item,
          ),
        ),
      )
        .then((values) => {
          values.forEach((token) => {
            if (token) {
              buffer.push(token);
            }
          });
        })
        .catch((err: any) => console.log(err.response.data.errors));

      token = {
        items: buffer,
        shipping: {
          firstname: customerResponse.customer!.givenName!,
          lastname: customerResponse.customer!.familyName!,
          address: customerResponse.customer!.address?.addressLine1!,
          city: customerResponse.customer!.address?.locality!,
          apt: customerResponse.customer!.address?.addressLine2 || '',
          state:
            customerResponse.customer!.address?.administrativeDistrictLevel1?.toUpperCase() as string,
          postcode: customerResponse.customer!.address?.postalCode!,
        },
      };
    }

  // TODO: check or add customer to WooCommerce
  // TODO: add order to WooCommerce
  }

  return {
    props: {
      token,
    },
  };
};

import React from 'react';
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { CheckoutSuccessToken } from '../../../modules/checkout/types';
import { withSessionSsr } from '../../../lib/session';
import { Square } from '../../../lib/square';
import { Links } from '../../../utils/keys';

import { SendGridModel } from '../../../modules/sendgrid/sendgrid.model';
import { CheckoutModel } from '../../../modules/checkout/checkout.model';
import { WooCommerce } from '../../../modules/woocommerce/woocommerce.model';

import Layout from 'src/containers/Layout/Layout';
import {
  CompletedMainContainer,
  CompletedTopBanner,
  ConfirmationBanner,
} from 'src/containers/pages/styles/CheckoutCompleted';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import CheckoutSuccessDisplay from '../../../modules/checkout/components/success/CheckoutSuccessDisplay';
import { WooCommerceApi } from '../../../lib';
import { WooCommerceProductVerification } from '../../../modules/woocommerce/types';

const NOT_FOUND_SKU = '10610'

function CheckoutCompleted({
  data,
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
        <Typography variant="body1">
          {'Thank you for your order. If you have any questions about your order, please contact us at contact@limitededitionpdx.com'}
        </Typography>
        <CheckoutSuccessDisplay
          orderId={data.id}
          items={data.items}
          shipping={data.shipping}
        />
        <Link href={Links.HOME}>
          <Button variant={'contained'} sx={{ marginBottom: '8rem'}}>
            {'Return Home'}
          </Button>
        </Link>
      </CompletedMainContainer>
    </Layout>
  );
}

export default CheckoutCompleted;

export const getServerSideProps: GetServerSideProps = withSessionSsr(
  async function getServerSideProps({ query, req }) {
    const email = new SendGridModel();
    const checkout = new CheckoutModel();
    const woocommerce = new WooCommerce();
    const transactionId = query.transactionId as string;

    let dataToken: CheckoutSuccessToken = {} as CheckoutSuccessToken;

    const orderResponse = await Square.ordersApi
      .retrieveOrder(transactionId)
      .then((res) => res.result);

    if (!orderResponse.errors) {
      const customerResponse = await Square.customersApi
        .retrieveCustomer(orderResponse.order?.customerId!)
        .then((res) => res.result);

      if (!customerResponse.errors) {
        const productToken = await checkout.createProductCheckoutToken(
          customerResponse.customer!,
          orderResponse.order?.lineItems!,
        );
        dataToken = checkout.createCheckoutDataToken(
          transactionId,
          customerResponse.customer!,
          productToken,
        );

        const ids: WooCommerceProductVerification[] = [];
        // TODO: create new order in WooCommerce
        for (const p of orderResponse.order?.lineItems!) {
          if (p.note) {
            await WooCommerceApi.get(`products?sku=${p.note}`)
              .then((res: any) => res.data)
              .then((data) => {
                ids.push({
                  id: data[0].id,
                  sku: p.note!
                })
              })
              .catch((err: any) => alert("Cannot get product ids"));
          }
        }

        const token = woocommerce.createOrderToken(
          customerResponse.customer!,
          orderResponse.order!,
          transactionId,
          ids,
          (req.session.auth && req.session.auth.id) || undefined,
        );

        await WooCommerceApi.post('orders', token)
          .then((res: any) => {
            req.session.cart = [];
          })
          .catch((err: any) => alert("Cannot place order"));

        const emailToken = email.createEmailToken(transactionId, customerResponse.customer!, dataToken.items);
        await email.sendMail(emailToken)
          .then((res) => res)
          .catch((err: any) => alert("Unable to send receipt"));
      }
    }

    return {
      props: {
        data: dataToken,
      },
    };
  },
);

// checkout demo
// http://localhost:3000/checkout/success?checkoutId=CBASEIgSbC90zS5WshjRBVJSKok&transactionId=vDms22DbPxenYWtztSkvCvMJq4EZY

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

        let count  = 0;

        if (count < 1) {
          // TODO: create new order in WooCommerce
          const newWooCommerceOrder = await woocommerce.createNewOrder(
            customerResponse.customer!,
            orderResponse.order!,
            transactionId,
            (req.session.auth && req.session.auth.id) || undefined,
          );

          const emailToken = email.createEmailToken(transactionId, customerResponse.customer!, dataToken.items);
          await email.sendMail(emailToken)
            .then((res) => res)
            .catch((err: any) => console.log('email error', err));
          ++count;
        }
      }
    }

    return {
      props: {
        data: dataToken,
      },
    };
  },
);

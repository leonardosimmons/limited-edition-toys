import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { CheckoutSuccessToken } from '../../../modules/checkout/types';
import { withSessionSsr } from '../../../lib/session';
import { Square } from '../../../lib/square';

import { CheckoutModel } from '../../../modules/checkout/checkout.model';
import { WooCommerce } from '../../../modules/woocommerce/woocommerce.model';

import Layout from 'src/containers/Layout/Layout';
import {
  CompletedMainContainer,
  CompletedTopBanner,
  ConfirmationBanner,
} from 'src/containers/pages/styles/CheckoutCompleted';

import Typography from '@mui/material/Typography';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

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
      </CompletedMainContainer>
    </Layout>
  );
}

export default CheckoutCompleted;

export const getServerSideProps: GetServerSideProps = withSessionSsr(
  async function getServerSideProps({ query, req }) {
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
        const productToken = await checkout.createProductCheckoutToken(customerResponse.customer!, orderResponse.order?.lineItems!);
        dataToken = checkout.createCheckoutDataToken(customerResponse.customer!, productToken);

        const newWooCommerceOrder = await woocommerce.createNewOrder(
          customerResponse.customer!,
          orderResponse.order!,
          transactionId,
          req.session.auth && req.session.auth.id || undefined
        );
      }
    }

    return {
      props: {
        data: dataToken,
      },
    };
  },
);

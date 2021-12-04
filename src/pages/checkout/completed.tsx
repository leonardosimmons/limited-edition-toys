import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

import Layout from 'src/containers/Layout/Layout';
import {
  CompletedMainContainer,
  CompletedTopBanner,
  ConfirmationBanner,
} from 'src/containers/pages/styles/CheckoutCompleted';
import { getStaticProps } from '..';

import Typography from '@mui/material/Typography';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

function CheckoutCompleted({}: InferGetServerSidePropsType<
  typeof getStaticProps
>): JSX.Element {
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log('query', ctx.query);
  // checkoutId
  // referenceId
  // transactionID

  return {
    props: {},
  };
};

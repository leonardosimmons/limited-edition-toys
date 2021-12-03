import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

import Layout from 'src/containers/Layout/Layout';
import { getStaticProps } from '..';

function CheckoutCompleted({}: InferGetServerSidePropsType<
  typeof getStaticProps
>): JSX.Element {
  return (
    <Layout title={'Limited Edition Toys | Checkout - Billing'}>
      <h1>YOUR ORDER WAS SUCCESSFUL</h1>
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

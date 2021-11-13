import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import data from 'data/pages/cart.json';

import { useCart } from 'models/cart/useCart';

import {
  ShoppingCartMainContainer,
  PreviewSection,
  SummarySection,
} from 'src/containers/pages/styles/ShoppingCart';

import Divider from '@mui/material/Divider';

import Layout from 'src/containers/Layout/Layout';
import ShoppingCartPreview from 'models/cart/components/preview/ShoppingCartPreview';
import ShoppingCartSummary from 'models/cart/components/summary/ShoppingCartSummary';

function ShoppingCart({
  title,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const cart = useCart();

  //* -------------------------------------------------
  // Render

  return (
    <Layout title={title}>
      <ShoppingCartMainContainer disableGutters maxWidth={false}>
        <PreviewSection>
          <ShoppingCartPreview />
          <Divider orientation="vertical" />
        </PreviewSection>
        <SummarySection>
          <ShoppingCartSummary />
        </SummarySection>
      </ShoppingCartMainContainer>
    </Layout>
  );
}

export default ShoppingCart;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      title: data.title,
    },
  };
};

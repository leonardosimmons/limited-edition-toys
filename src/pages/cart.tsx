import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import data from 'data/pages/cart.json';

import {
  ShoppingCartMainContainer,
  PreviewSection,
  SummarySection,
} from 'src/containers/pages/styles/ShoppingCart';

import Divider from '@mui/material/Divider';

import Layout from 'src/containers/Layout/Layout';
import ShoppingCartPreview from 'models/cart/components/preview/ShoppingCartPreview';
import ShoppingCartSummary from 'models/cart/components/summary/ShoppingCartSummary';

function ShoppingCart({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  return (
    <Layout title={data.title}>
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: data.title,
    },
    revalidate: 60 * 60 * 24,
  };
};

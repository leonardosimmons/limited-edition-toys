import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import data from 'data/pages/cart.json';

import { useCheckCartSession } from 'modules/cart/hooks/useCheckCartSession';

import {
  ShoppingCartMainContainer,
  PreviewSection,
  SummarySection,
} from 'src/containers/pages/styles/ShoppingCart';

import Divider from '@mui/material/Divider';

import Layout from 'src/containers/Layout/Layout';
import ShoppingCartPreview from 'modules/cart/components/preview/ShoppingCartPreview';
import ShoppingCartSummary from 'modules/cart/components/summary/ShoppingCartSummary';

function ShoppingCart({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  useCheckCartSession();

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

import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Product } from 'models/product/types';
import { Queries } from 'utils/keys';

import { useProducts } from 'models/product/useProducts';
import { getAllProducts } from 'models/product/queries';
import { capitalizeFirstLetters } from 'lib';

import {
  CategoryDisplayGrid,
  CategoryMainContainer,
} from 'models/pages/styles/CategoryPage';

import Grid from '@mui/material/Grid';

import Layout from 'src/containers/Layout/Layout';
import ProductHeader from 'src/containers/headers/products/ProductHeader';
import ProductDisplayCard from 'models/product/components/display-card/ProductDisplayCard';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';

function ProductCategoryDisplayPage({
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const { products } = useProducts({
    filter: {
      value: category,
      type: 'category',
    },
  });

  //* -------------------------------------------------
  // Render

  if (products.status === 'loading') {
    return (
      <Layout title={category}>
        <CategoryMainContainer maxWidth={false} sx={{ minHeight: '70vh' }}>
          <CircleLoadSpinner />
        </CategoryMainContainer>
      </Layout>
    );
  }

  return (
    <Layout title={`Limited Edition Toys | ${category}`}>
      <ProductHeader title={category} />
      <CategoryMainContainer maxWidth={false}>
        <CategoryDisplayGrid container direction="row" spacing={2}>
          {products.filtered.map((product: Product, index: number) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <ProductDisplayCard product={product} />
            </Grid>
          ))}
        </CategoryDisplayGrid>
      </CategoryMainContainer>
    </Layout>
  );
}

export default ProductCategoryDisplayPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(Queries.ALL_PRODUCTS, getAllProducts);

  let category: string = ctx.params!.slug as string;
  if (category.includes('-')) {
    category = category.replace(/[-]/g, ' ');
  }

  return {
    props: {
      category: capitalizeFirstLetters(category),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

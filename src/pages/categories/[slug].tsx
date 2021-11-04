import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Product } from 'models/product/types';
import { Queries } from 'utils/keys';

import { useProducts } from 'models/product/useProducts';
import { getAllProducts } from 'models/product/queries';
import { capitalizeFirstLetters } from 'lib';

import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';
import Container, { ContainerProps } from '@mui/material/Container';

import Layout from 'src/containers/Layout/Layout';
import ProductHeader from 'src/containers/headers/products/ProductHeader';
import ProductDisplayCard from 'models/product/components/display-card/ProductDisplayCard';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';

const DisplayGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.up('mobileMd')]: {
    marginTop: '2rem',
  },
  '& > div.MuiGrid-root': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
}));

const MainContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  flex: 1,
  width: '100%',
  maxWidth: '1850px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  marginBottom: '100px',
}));

function ProductCategoryDisplayPage({
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const { products } = useProducts({
    filter: {
      value: category,
      type: 'category',
    },
  });

  if (products.status === 'loading') {
    return (
      <Layout title={category}>
        <MainContainer maxWidth={false}>
          <CircleLoadSpinner />
        </MainContainer>
      </Layout>
    );
  }

  //* -------------------------------------------------
  // Render

  return (
    <Layout title={`Limited Edition Toys | ${category}`}>
      <ProductHeader title={category} />
      <MainContainer maxWidth={false}>
        <DisplayGrid container direction="row" spacing={2}>
          {products.filtered.map((product: Product, index: number) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <ProductDisplayCard product={product} />
            </Grid>
          ))}
        </DisplayGrid>
      </MainContainer>
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

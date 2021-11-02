import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Product } from 'models/product/types';
import { Queries } from 'utils/keys';

import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';

import { useProducts } from 'models/product/useProducts';
import { capitalizeFirstLetters } from 'lib';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Layout from 'src/containers/Layout/Layout';
import ProductHeader from 'src/containers/headers/products/ProductHeader';
import ProductDisplayCard from 'lib/components/cards/product-display/ProductDisplayCard';
import { getAllProducts } from 'models/product/queries';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';

const useStyles = makeStyles(({ breakpoints, custom }: Theme) =>
  createStyles({
    displayGrid: {
      [breakpoints.up('mobileMd')]: {
        marginTop: '2rem',
      },
      '& > div.MuiGrid-root': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },

    mainContainer: {
      flex: 1,
      width: '100%',
      maxWidth: '1850px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
    },

    loading: {
      ...custom.loading,
      '& > div.MuiCircularProgress-root': {
        marginBottom: '20px',
      },
    },
  }),
);

function ProductCategoryDisplayPage({
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const styles = useStyles();
  const { products } = useProducts({
    filter: {
      value: category,
      type: 'category',
    },
  });

  if (products.status === 'loading') {
    return (
      <Layout title={category}>
        <Container className={styles.mainContainer}>
          <CircleLoadSpinner />
        </Container>
      </Layout>
    );
  }

  //* -------------------------------------------------
  // Render

  return (
    <Layout title={`Limited Edition Toys | ${category}`}>
      <ProductHeader title={category} />
      <Container className={styles.mainContainer}>
        <Grid
          container
          className={styles.displayGrid}
          direction="row"
          spacing={2}>
          {products.filtered.map((product: Product, index: number) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <ProductDisplayCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
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

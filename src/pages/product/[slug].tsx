import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import { Product } from 'models/product/types';
import { StaticPath } from 'utils/types';
import { Queries } from 'utils/keys';

import { capitalizeFirstLetters, fixSlug, VendResponse } from 'lib';
import { ProductModel } from 'models/product/product.model';
import { getProductById, useGetProductById } from 'models/product/queries';

import Image from 'next/image';
import Layout from 'src/containers/Layout/Layout';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(({ custom }: Theme) =>
  createStyles({
    mainContainer: {
      height: '100%',
      width: '100%',
    },

    loading: {
      ...custom.loading,
      '& > div.MuiCircularProgress-root': {
        marginBottom: '20px',
      },
    },
  }),
);

function ProductPage({
  product,
  title,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const styles = useStyles();

  return (
    <Layout title={`Limited Edition Toys | ${title}`}>
      <Box className={styles.mainContainer}>
        <Grid container>
          <Grid item>{product.name}</Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const productContorller = new ProductModel();

  const products = await productContorller.getAll();

  const paths: StaticPath[] = products.map((product) => ({
    params: {
      slug: fixSlug(product.name),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const title: string = capitalizeFirstLetters(
    (ctx.params!.slug as string).replace(/[-]/g, ' '),
  );

  const productController = new ProductModel();
  const products = await productController.getAll();
  const product: Product | undefined = products.find(
    (product) => fixSlug(product.name) === ctx.params!.slug,
  );

  const queryClient = new QueryClient();
  if (product) {
    await queryClient.prefetchQuery(product.id, () =>
      getProductById(product.id),
    );
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      product,
      title,
    },
    revalidate: 60 * 60 * 24 * 7,
  };
};

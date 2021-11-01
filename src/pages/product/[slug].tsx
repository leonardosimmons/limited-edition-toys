import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import { StaticPath } from 'utils/types';

import { capitalizeFirstLetters, fixSlug, VendResponse } from 'lib';
import { ProductModel } from 'models/product/product.model';

import Image from 'next/image';
import Layout from 'src/containers/Layout/Layout';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useProducts } from 'models/product/useProducts';

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
  slug,
  title,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const styles = useStyles();
  const { status, products } = useProducts();
  const product = React.useMemo(() => {
    const list = products.list?.slice(0);
    if (list) {
      return list?.find(
        (product) =>
          product.name
            .toLowerCase()
            .replace(/[' '/]/g, '-')
            .replace(/[!:.;()""\[\]]/g, '')
            .replace(/(--|---|-+-)/g, '-') === slug,
      );
    }
  }, [products]);

  return (
    <Layout title={`Limited Edition Toys | ${title}`}>
      <Box className={styles.mainContainer}>
        <Grid container>
          <Grid item>{product?.name}</Grid>
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

  return {
    props: {
      slug: ctx.params!.slug,
      title,
    },
    revalidate: 60 * 60 * 24 * 7,
  };
};

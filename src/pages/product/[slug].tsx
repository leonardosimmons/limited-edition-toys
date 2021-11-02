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
import { useProducts } from 'models/product/useProducts';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';
import { Product } from 'models/product/types';

const useStyles = makeStyles(({ custom }: Theme) =>
  createStyles({
    imageBox: {
      position: 'relative',
      width: '250px',
      height: '155px',
      ...custom.centerColumn,
    },

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
  const { products } = useProducts();
  const product: Product | undefined = React.useMemo(() => {
    if (products.list && products.list.length > 0) {
      return products.list.find(
        (product) =>
          product.name
            .toLowerCase()
            .replace(/[' '/]/g, '-')
            .replace(/[!:.;()""\[\]]/g, '')
            .replace(/(--|---|-+-)/g, '-') === slug,
      );
    }
  }, [products]);

  //* -------------------------------------------------
  // Render

  if (products.status === 'loading') {
    return (
      <Layout title={title}>
        <Container className={styles.mainContainer}>
          <CircleLoadSpinner />
        </Container>
      </Layout>
    );
  }

  return (
    <Layout title={`Limited Edition Toys | ${title}`}>
      <Container className={styles.mainContainer}>
        <Grid container>
          <Grid item>
            <Box className={styles.imageBox}>
              <Image
                src={product?.image_url as string}
                alt="Product Image"
                layout={'fill'}
                objectFit={'contain'}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
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

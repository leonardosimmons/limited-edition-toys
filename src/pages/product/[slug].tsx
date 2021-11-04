import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Product } from 'models/product/types';
import { StaticPath } from 'utils/types';

import { capitalizeFirstLetters, fixSlug, VendResponse } from 'lib';
import { ProductModel } from 'models/product/product.model';
import { useProducts } from 'models/product/useProducts';

import { styled } from '@mui/material/styles';

import Image from 'next/image';
import Container, { ContainerProps } from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Layout from 'src/containers/Layout/Layout';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';
import ProductStarRating from 'models/product/components/star-rating/ProductStarRating';

const ImageBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '280px',
  height: '200px',
  marginTop: '10px',
  ...theme.custom?.centerColumn,
}));

const MainContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  height: '100%',
  width: '100%',
  ...theme.custom?.centerColumn,
}));

const MainGrid = styled(Grid)<GridProps>(({ theme }) => ({
  ...theme.custom?.center,
}));

const ProductInfo = styled(Grid)<GridProps>(({ theme }) => ({
  '& > div': {
    ...theme.custom?.center,
  },
  '& > div:nth-of-type(1)': {
    '& > h2.MuiTypography-h2': {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
  '& > div:nth-of-type(2)': {
    marginTop: '10px',
    ...theme.custom?.centerColumn,
    '& div.MuiContainer-root': {
      ...theme.custom?.center,
      '& > svg': {
        height: '.75em',
        width: '.75em',
      },
    },
    '& span.MuiTypography-caption': {
      margin: '5px 0',
      fontSize: '1rem',
    },
  },
  '& > div:nth-of-type(3)': {
    '& span.MuiTypography-body1': {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      margin: '1.5rem 0',
    },
  },
}));

function ProductPage({
  slug,
  title,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
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
        <MainContainer>
          <CircleLoadSpinner />
        </MainContainer>
      </Layout>
    );
  }

  return (
    <Layout title={`Limited Edition Toys | ${title}`}>
      <MainContainer>
        <MainGrid container>
          <Grid item sx={{ padding: '16px' }}>
            <ImageBox>
              <Image
                priority
                src={product?.image_url as string}
                alt="Product Image"
                layout={'fill'}
                objectFit={'contain'}
              />
            </ImageBox>
          </Grid>
          <ProductInfo item container direction="column">
            <Grid item>
              <Typography variant="h2">{product?.name}</Typography>
            </Grid>
            <Grid item>
              <ProductStarRating name={slug} rating={0} reviews={0} />
            </Grid>
            <Grid item>
              <Typography component="span">
                {`$${product?.price_excluding_tax}.00`}
              </Typography>
            </Grid>
          </ProductInfo>
        </MainGrid>
      </MainContainer>
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

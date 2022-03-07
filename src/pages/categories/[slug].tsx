import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { VendProduct } from 'modules/product/types';
import { Queries } from 'utils/keys';

import productCategories from 'data/categories.json';
import { useProducts } from 'modules/product/useProducts';
import { getAllProducts } from 'modules/product/queries';
import { capitalizeFirstLetters, shuffleArray } from '../../../lib/functions';

import {
  DisplayPageMainGrid,
  DisplayPageMainContainer,
} from 'src/containers/pages/styles/DisplayPage';

import Grid from '@mui/material/Grid';

import Layout from 'src/containers/Layout/Layout';
import ProductHeader from 'src/containers/headers/products/ProductHeader';
import ProductDisplayCard from 'modules/product/components/display-card/ProductDisplayCard';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';
import { MenuTab } from 'utils/types';
import { useShuffledProductList } from 'modules/product/hooks/useShuffledProductList';
import { useCheckCartSession } from 'modules/cart/hooks/useCheckCartSession';

function ProductCategoryDisplayPage({
  title,
  category,
  tags,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  useCheckCartSession();
  const { products } = useProducts({
    filter: {
      value: tags,
      type: 'temp-fix',
    },
  });
  const shuffled = useShuffledProductList(products.filtered, products.filtered);

  //* -------------------------------------------------
  // Render

  if (products.status === 'loading') {
    return (
      <Layout title={title}>
        <DisplayPageMainContainer maxWidth={false} sx={{ minHeight: '70vh' }}>
          <CircleLoadSpinner />
        </DisplayPageMainContainer>
      </Layout>
    );
  }

  return (
    <Layout title={`Limited Edition Toys | ${title}`}>
      <ProductHeader title={title} />
      <DisplayPageMainContainer maxWidth={false}>
        <DisplayPageMainGrid container direction="row" spacing={2}>
          {shuffled.list.map((product: VendProduct, index: number) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <ProductDisplayCard product={product} />
            </Grid>
          ))}
        </DisplayPageMainGrid>
      </DisplayPageMainContainer>
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

  let title: string = '';
  let tags: string[] = [];
  productCategories.forEach((category: MenuTab) => {
    if (category.slug === (ctx.params!.slug as string)) {
      category.tags.forEach((tag) => {
        title = category.name;
        tags.push(tag.toLowerCase());
      });
    }
  });

  return {
    props: {
      category: capitalizeFirstLetters(category),
      dehydratedState: dehydrate(queryClient),
      title,
      tags,
    },
  };
};

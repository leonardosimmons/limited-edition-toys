import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Product, ProductType } from 'models/product/types';
import { useAppDispatch } from 'src/redux';
import { Queries } from 'utils/keys';

import { resetUserSearch } from 'src/redux/models/search/actions';
import { useProducts } from 'models/product/useProducts';
import { getAllProducts, getProductTags } from 'models/product/queries';
import { capitalizeFirstLetters } from 'lib';

import {
  DisplayPageMainGrid,
  DisplayPageMainContainer,
} from 'src/containers/pages/styles/DisplayPage';

import Grid from '@mui/material/Grid';

import Layout from 'src/containers/Layout/Layout';
import ProductHeader from 'src/containers/headers/products/ProductHeader';
import ProductDisplayCard from 'models/product/components/display-card/ProductDisplayCard';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';

function ProductTagDisplayPage({
  tag,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const dispatch = useAppDispatch();

  //* -------------------------------------------------
  // Products

  const [tagId, setTagId] = React.useState<string>('');
  const { products, tags } = useProducts({
    filter: {
      value: tagId,
      type: 'tag',
    },
  });

  React.useEffect(() => {
    tags.list?.forEach((t: Partial<ProductType>) => {
      if (t.name === tag) {
        setTagId(t.id as string);
      }
    });
  }, [tags]);

  //* -------------------------------------------------
  // Resets

  React.useEffect(() => {
    dispatch(resetUserSearch());
  }, []);

  //* -------------------------------------------------
  // Render

  if (products.status === 'loading') {
    return (
      <Layout title={`Limited Edition Toys | Search Products`}>
        <DisplayPageMainContainer maxWidth={false} sx={{ minHeight: '70vh' }}>
          <CircleLoadSpinner />
        </DisplayPageMainContainer>
      </Layout>
    );
  }

  return (
    <Layout title={`Limited Edition Toys | ${tag}`}>
      <ProductHeader title={tag} />
      <DisplayPageMainContainer maxWidth={false}>
        <DisplayPageMainGrid container direction="row" spacing={2}>
          {products.filtered.map((product: Product, index: number) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <ProductDisplayCard product={product} />
            </Grid>
          ))}
        </DisplayPageMainGrid>
      </DisplayPageMainContainer>
    </Layout>
  );
}

export default ProductTagDisplayPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(Queries.ALL_PRODUCTS, getAllProducts);
  queryClient.prefetchQuery(Queries.PRODUCT_TAGS, getProductTags);

  let tag: string = ctx.params!.tag as string;
  if (tag.includes('-')) {
    tag = tag.replace(/[-]/g, ' ');
  }

  return {
    props: {
      tag: capitalizeFirstLetters(tag, { tag: true }),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

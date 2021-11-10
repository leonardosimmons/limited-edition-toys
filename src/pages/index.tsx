import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { Queries } from 'utils/keys';

import { getAllProducts, getProductTags } from 'models/product/queries';

import { HomePageMainContainer } from 'src/containers/pages/styles/HomePage';

import Button from '@mui/material/Button';

import Layout from 'src/containers/Layout';
import MainHeaderOne from 'src/containers/headers/main/version-one/MainHeaderOne';

function Index({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  const router = useRouter();
  return (
    <Layout title={'Limited Edition Toys - Store front'}>
      <HomePageMainContainer maxWidth={false} disableGutters>
        <MainHeaderOne />
      </HomePageMainContainer>
    </Layout>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(Queries.ALL_PRODUCTS, getAllProducts);
  await queryClient.prefetchQuery(Queries.PRODUCT_TAGS, getProductTags);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24,
  };
};

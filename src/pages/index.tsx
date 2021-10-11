import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Queries } from 'utils/keys';

import { getProductTags } from 'src/models/product/queries';

import Layout from 'src/containers/Layout';

function Index({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  return <Layout title={'Limited Edition Toys - Store front'}></Layout>;
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(Queries.PRODUCT_TAGS, getProductTags);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

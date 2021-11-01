import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Queries } from 'utils/keys';

import { getProductTags } from 'models/product/queries';

import Layout from 'src/containers/Layout';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import { ProductModel } from 'models/product/product.model';

function Index({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  const router = useRouter();
  return (
    <Layout title={'Limited Edition Toys - Store front'}>
      <Button
        variant="contained"
        onClick={() => router.push('/categories/anime')}>
        Press Me
      </Button>
    </Layout>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const productController = new ProductModel();
  await queryClient.prefetchQuery(
    Queries.ALL_PRODUCTS,
    productController.getAll,
  );
  await queryClient.prefetchQuery(Queries.PRODUCT_TAGS, getProductTags);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24,
  };
};

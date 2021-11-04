import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { Queries } from 'utils/keys';

import { getAllProducts, getProductTags } from 'models/product/queries';

import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Container, { ContainerProps } from '@mui/material/Container';

import Layout from 'src/containers/Layout';

const MainContainer = styled(Container)<ContainerProps>(() => ({
  minHeight: '50vh',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

function Index({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  const router = useRouter();
  return (
    <Layout title={'Limited Edition Toys - Store front'}>
      <MainContainer>
        <Button
          variant="contained"
          onClick={() => router.push('/categories/anime')}>
          Press Me
        </Button>
      </MainContainer>
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

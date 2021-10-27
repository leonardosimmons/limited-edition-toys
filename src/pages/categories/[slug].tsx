import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { StaticPath } from 'utils/types';
import { Queries } from 'utils/keys';

import { getAllProducts } from 'models/product/queries';
import { useProducts } from 'models/product/useProducts';
import { productCategories } from 'data/navbar-categories';

import Layout from 'src/containers/Layout/Layout';

function ProductCategoryDisplayPage({
  category,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const { status, products, error } = useProducts();

  return <Layout title={`Limited Edition Toys | `}></Layout>;
}

export default ProductCategoryDisplayPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: StaticPath[] = productCategories.map((category) => ({
    params: {
      slug: category.slug as string,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(Queries.ALL_PRODUCTS, () => getAllProducts());

  let category: string = context.params!.slug as string;
  if (category.includes('-')) {
    category = category.replace(/[-]/g, ' ');
  }

  return {
    props: {
      category,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

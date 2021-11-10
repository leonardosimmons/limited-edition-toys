import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Product } from 'models/product/types';
import { Queries } from 'utils/keys';

import data from 'data/pages/home.json';
import { useProducts } from 'models/product/useProducts';
import { getAllProducts, getProductTags } from 'models/product/queries';

import { HomePageMainContainer } from 'src/containers/pages/styles/HomePage';

import Layout from 'src/containers/Layout';
import MainHeaderOne from 'src/containers/headers/main/version-one/MainHeaderOne';
import UpcommingEvents from 'src/containers/sections/UpcommingEvents';
import ProductDisplay from 'src/containers/sections/ProductDisplay';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';

function Index({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  const router = useRouter();
  const { products } = useProducts();

  //* -------------------------------------------------
  // Featured Products

  const featuredProducts = React.useMemo(() => {
    if (products) {
      const buffer: Product[] = [];
      products.list.forEach((product) => {
        data.featured.list.forEach((item) => {
          if (item.sku === product.sku && !buffer.includes(product)) {
            buffer.push(product);
          }
        });
      });
      return buffer;
    }
  }, [products]);

  //* -------------------------------------------------
  // Events

  //* -------------------------------------------------
  // Best Sellers

  const bestSellers = React.useMemo(() => {
    if (products) {
      const buffer: Product[] = [];
      products.list.forEach((product) => {
        data.mostSold.list.forEach((item) => {
          if (item.sku === product.sku && !buffer.includes(product)) {
            buffer.push(product);
          }
        });
      });
      return buffer;
    }
  }, [products]);

  //* -------------------------------------------------
  // Render

  if (products.status === 'loading') {
    return (
      <Layout title={'Limited Edition Toys - Store front'}>
        <HomePageMainContainer
          maxWidth={false}
          disableGutters
          sx={{ minHeight: '70vh' }}>
          <CircleLoadSpinner />
        </HomePageMainContainer>
      </Layout>
    );
  }

  return (
    <Layout title={'Limited Edition Toys - Store front'}>
      <HomePageMainContainer maxWidth={false} disableGutters>
        <MainHeaderOne />
        <ProductDisplay
          title={data.featured.title}
          products={featuredProducts as Product[]}
        />
        <UpcommingEvents title={data.events.title} />
        <ProductDisplay
          title={data.mostSold.title}
          products={bestSellers as Product[]}
        />
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

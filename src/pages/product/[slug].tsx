import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import { StaticPath } from 'utils/types';

import { capitalizeFirstLetters, fixSlug, VendResponse } from 'lib';
import { Product } from 'models/product/types';
import { getAllProducts } from 'models/product/queries';
import Layout from 'src/containers/Layout/Layout';

const useStyles = makeStyles(({ breakpoints, palette }: Theme) =>
  createStyles({}),
);

function ProductPage({
  title,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <Layout title={`Limited Edition Toys | ${title}`}>
      <div>{title}</div>
    </Layout>
  );
}

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const amount: number = parseInt(
    process.env.NEXT_PUBLIC_PRODUCT_CHUNK_QUERY_AMOUNT as string,
  );
  const products: Product[] = await getAllProducts(0, amount)
    .then((vend: VendResponse<Product[]>) => vend)
    .then(async (firstSet: VendResponse<Product[]>) => {
      const secondSet: VendResponse<Product[]> = await getAllProducts(
        firstSet.version.max,
        amount,
      ).then((vend: VendResponse<Product[]>) => vend);
      return {
        data: [...firstSet.data, ...secondSet.data],
        version: secondSet.version,
      };
    })
    .then(async (currentSet: VendResponse<Product[]>) => {
      const thirdSet: Product[] = await getAllProducts(
        currentSet.version.max,
        amount,
      ).then((vend: VendResponse<Product[]>) => vend.data);
      return [...currentSet.data, ...thirdSet];
    });

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
  const queryClient = new QueryClient();
  const title: string = capitalizeFirstLetters(
    (ctx.params!.slug as string).replace(/[-]/g, ' '),
  );

  return {
    props: {
      title,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24 * 7,
  };
};

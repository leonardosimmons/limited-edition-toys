import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { VendProduct } from 'modules/product/types';
import { useAppDispatch } from 'src/redux';
import { Queries } from 'utils/keys';

import { useProducts } from 'modules/product/useProducts';
import { getAllProducts } from 'modules/product/queries';
import { capitalizeFirstLetters } from '../../../../lib/functions';
import { resetUserSearch } from 'src/redux/models/search/actions';
import { useShuffledProductList } from 'modules/product/hooks/useShuffledProductList';
import { useCheckCartSession } from 'modules/cart/hooks/useCheckCartSession';

import {
  DisplayPageMainGrid,
  DisplayPageMainContainer,
} from 'src/containers/pages/styles/DisplayPage';

import Grid from '@mui/material/Grid';

import Layout from 'src/containers/Layout/Layout';
import ProductDisplayCard from 'modules/product/components/display-card/ProductDisplayCard';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';
import SearchHeader from 'src/containers/headers/search/SearchResultsHeader';

function ProductSearchDisplayPage({
  search,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  useCheckCartSession();
  const dispatch = useAppDispatch();
  const { products } = useProducts({
    filter: {
      value: search,
      type: 'search',
    },
  });
  const shuffled = useShuffledProductList(products.filtered, products.filtered);

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
    <Layout title={`Limited Edition Toys | Search Products`}>
      <SearchHeader title={`Results for: ${search}`} />
      <DisplayPageMainContainer maxWidth={false}>
        <DisplayPageMainGrid container direction="row" spacing={2}>
          {shuffled.list.map((product: VendProduct, index: number) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <ProductDisplayCard type={'vend'} product={product} />
            </Grid>
          ))}
        </DisplayPageMainGrid>
      </DisplayPageMainContainer>
    </Layout>
  );
}

export default ProductSearchDisplayPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(Queries.ALL_PRODUCTS, getAllProducts);

  let search: string = ctx.params!.slug as string;
  if (search.includes('-')) {
    search = search.replace(/[-]/g, ' ');
  }

  return {
    props: {
      search: capitalizeFirstLetters(search, { tag: true }),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

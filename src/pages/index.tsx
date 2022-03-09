import React from 'react';
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { VendProduct } from 'modules/product/types';
import { WooCommerceProduct } from '../../modules/woocommerce/types';
import { Images, Queries } from 'utils/keys';
import { WooCommerceApi } from '../../lib';

import data from 'data/pages/home.json';
import { useAppSelector } from 'src/redux';
import { appSelector } from 'src/redux/selector';
import { useCart } from 'modules/cart/hooks/useCart';
import { useProducts } from 'modules/product/useProducts';
import { useSessionCheck } from 'modules/auth/hooks/useSessionCheck';
import { getAllProducts, getProductTags } from 'modules/product/queries';
import { useCheckCartSession } from 'modules/cart/hooks/useCheckCartSession';

import { HomePageMainContainer } from 'src/containers/pages/styles/HomePage';

import Image from 'next/image';
import Layout from 'src/containers/Layout';
import MainHeaderOne from 'src/containers/headers/main/version-one/MainHeaderOne';
import UpcomingEvents from 'src/containers/sections/UpcomingEvents';
import ProductDisplay from 'src/containers/sections/ProductDisplay';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';
import Carousel from 'src/features/carousel/Carousel';
import { CarouselImage } from 'src/features/carousel/styles/CarouselFeatures';
import {
  SectionBannerBox,
  SectionWrapper,
} from 'src/containers/sections/styles/Section';
import { DisplayImage } from 'src/containers/sections/DisplayImage';

function Index({
  bestSellers,
  newProducts
}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  useCart();
  useSessionCheck();
  useCheckCartSession();
  const { products } = useProducts();
  const ctx = useAppSelector(appSelector);

  //* -------------------------------------------------
  // Events

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
          type={'woocommerce'}
          src={Images.NEW_ITEMS}
          title={data.featured.title}
          products={
            ctx.ui.status.viewport === 'tablet'
              ? (newProducts as WooCommerceProduct[]).slice(0, 6)
              : (newProducts as WooCommerceProduct[]).slice(0, 8)
          }
        />
        <UpcomingEvents title={data.events.title} />
        <SectionWrapper maxWidth={false}>
          <SectionBannerBox sx={{ maxWidth: '1050px', marginBottom: '40px' }}>
            <Image
              src={Images.ABOUT_US_BANNER}
              alt={'About Us'}
              layout={'fill'}
            />
          </SectionBannerBox>
        </SectionWrapper>
        <Carousel arrows dots autoPlay={3}>
          {data.carousel.images.map((image, index) => (
            <CarouselImage key={index}>
              <Image
                src={image}
                alt="store image"
                layout="fill"
                objectFit="contain"
              />
            </CarouselImage>
          ))}
        </Carousel>
        <ProductDisplay
          type={'woocommerce'}
          title={data.mostSold.title}
          products={
            ctx.ui.status.viewport === 'tablet'
              ? (bestSellers as WooCommerceProduct[]).slice(0, 6)
              : (bestSellers as WooCommerceProduct[]).slice(0, 8)
          }
        />
        <DisplayImage>
          <Image
            src={Images.MASCOT_ONE}
            alt="Limited Edition Toys Mascot"
            layout="fill"
            objectFit="contain"
          />
        </DisplayImage>
      </HomePageMainContainer>
    </Layout>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(Queries.ALL_PRODUCTS, getAllProducts);
  await queryClient.prefetchQuery(Queries.PRODUCT_TAGS, getProductTags);

  const newProducts = await WooCommerceApi.get('products')
    .then((res: any) => res.data)
    .catch((err: any) => console.log(err));

  const bestSellers = await WooCommerceApi.get('products?orderby=popularity')
    .then((res: any) => res.data)
    .catch((err) => console.log(err))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      bestSellers,
      newProducts
    },
    revalidate: 60 * 60 * 4
  };
};

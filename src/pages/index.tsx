import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Product } from 'models/product/types';
import { Images, Queries } from 'utils/keys';

import data from 'data/pages/home.json';
import { useAppSelector } from 'src/redux';
import { appSelector } from 'src/redux/selector';
import { useUser } from 'models/user/hooks/useUser';
import { useCart } from 'models/cart/hooks/useCart';
import { useProducts } from 'models/product/useProducts';
import { getAllProducts, getProductTags } from 'models/product/queries';
import { useSessionCheck } from 'models/auth/hooks/useSessionCheck';

import { HomePageMainContainer } from 'src/containers/pages/styles/HomePage';

import Image from 'next/image';
import Layout from 'src/containers/Layout';
import MainHeaderOne from 'src/containers/headers/main/version-one/MainHeaderOne';
import UpcommingEvents from 'src/containers/sections/UpcommingEvents';
import ProductDisplay from 'src/containers/sections/ProductDisplay';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';
import Carousel from 'src/features/carousel/Carousel';
import { CarouselImage } from 'src/features/carousel/styles/CarouselFeatures';
import {
  SectionBannerBox,
  SectionWrapper,
} from 'src/containers/sections/styles/Section';
import { DisplayImage } from 'src/containers/sections/DisplayImage';

function Index({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  useCart();
  useSessionCheck();
  const user = useUser();
  const { products } = useProducts();
  const ctx = useAppSelector(appSelector);

  //* -------------------------------------------------
  // Events

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
          src={Images.NEW_IEMS}
          title={data.featured.title}
          products={
            ctx.ui.status.viewport === 'tablet'
              ? (featuredProducts as Product[]).slice(0, 6)
              : (featuredProducts as Product[])
          }
        />
        <UpcommingEvents title={data.events.title} />
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
          title={data.mostSold.title}
          products={
            ctx.ui.status.viewport === 'tablet'
              ? (bestSellers as Product[]).slice(0, 6)
              : (bestSellers as Product[])
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

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24,
  };
};

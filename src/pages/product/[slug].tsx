import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Product } from 'models/product/types';
import { StaticPath } from 'utils/types';
import { useAppDispatch } from 'src/redux';

import {
  resetProduct,
  setCurrentProductSelection,
  setProductInventoryLevel,
} from 'models/product/actions';
import { capitalizeFirstLetters, fixSlug } from 'lib';
import { useGetInventoryById } from 'models/product/queries';
import { ProductModel } from 'models/product/product.model';
import { useProducts } from 'models/product/useProducts';

import {
  ProductImageBox,
  ProductMainContainer,
  ProductMainGrid,
} from 'models/pages/styles/ProductPage';

import Image from 'next/image';
import Grid from '@mui/material/Grid';

import Layout from 'src/containers/Layout/Layout';
import CircleLoadSpinner from 'lib/components/loading/CircleLoadSpinner';
import ProductInformation from 'models/product/components/information/ProductInformation';

function ProductPage({
  slug,
  title,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const dispatch = useAppDispatch();
  const { products } = useProducts();
  const product: Product | undefined = React.useMemo(() => {
    if (products.list && products.list.length > 0) {
      return products.list.find(
        (product) =>
          product.name
            .toLowerCase()
            .replace(/[' '/]/g, '-')
            .replace(/[!:.;()""\[\]]/g, '')
            .replace(/(--|---|-+-)/g, '-') === slug,
      );
    }
  }, [products]);

  React.useEffect(() => {
    if (product) {
      dispatch(setCurrentProductSelection(product));
    }

    return () => {
      dispatch(resetProduct());
    };
  }, [product]);

  //* -------------------------------------------------
  // Inventory

  const { status: inventoryStatus, data: inventory } = useGetInventoryById(
    product?.id || '',
  );

  React.useEffect(() => {
    if (inventory) {
      let count: number = 0;
      for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].inventory_level > 0) {
          count = count + inventory[i].inventory_level;
        }
      }
      dispatch(setProductInventoryLevel(count));
    }
  }, [inventory]);

  //* -------------------------------------------------
  // Render

  if (products.status === 'loading' || inventoryStatus === 'loading') {
    return (
      <Layout title={title}>
        <ProductMainContainer>
          <ProductMainGrid>
            <CircleLoadSpinner />
          </ProductMainGrid>
        </ProductMainContainer>
      </Layout>
    );
  }

  return (
    <Layout title={`Limited Edition Toys | ${title}`}>
      <ProductMainContainer>
        <ProductMainGrid container>
          <Grid item>
            <ProductImageBox>
              <Image
                priority
                src={product?.image_url as string}
                alt="Product Image"
                layout={'fill'}
                objectFit={'contain'}
              />
            </ProductImageBox>
          </Grid>
          <ProductInformation item slug={slug} />
        </ProductMainGrid>
      </ProductMainContainer>
    </Layout>
  );
}

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const productContorller = new ProductModel();
  const products = await productContorller.getAll();
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
  const title: string = capitalizeFirstLetters(
    (ctx.params!.slug as string).replace(/[-]/g, ' '),
  );

  return {
    props: {
      slug: ctx.params!.slug,
      title,
    },
    revalidate: 60 * 60 * 24 * 7,
  };
};

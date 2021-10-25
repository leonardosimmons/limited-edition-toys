import Axios from 'axios';
import { VendResponse } from 'lib';
import { useQuery } from 'react-query';
import { Queries } from 'utils/keys';
import { Product, ProductPropertyOptions } from './types';

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API as string,
});

//* -------------------------------------------------
// Get All Products
export async function getAllProducts(
  version?: number,
  pageSize?: number,
): Promise<VendResponse<Product>> {
  if (!version && !pageSize) {
    return await axios.get(`/products`).then((res: any) => res.data);
  }
  return await axios
    .get(
      `/products?version=${version || 0}&page_size=${
        pageSize || process.env.NEXT_PUBLIC_DEFAULT_PRODUCTS_PER_PAGE
      }`,
    )
    .then((res: any) => res.data);
}

export function useGetAllProducts(version?: number, pageSize?: number) {
  return useQuery(
    [Queries.ALL_PRODUCTS, version],
    () => getAllProducts(version, pageSize),
    {
      keepPreviousData: true,
    },
  );
}

//* -------------------------------------------------
// Get Single Product

//* -------------------------------------------------
// Get All Product Tags
export async function getProductTags(): Promise<ProductPropertyOptions[]> {
  return await axios
    .get(process.env.NEXT_PUBLIC_PRODUCT_TAGS_API as string)
    .then((res: any) => res.data);
}

export function useProductTags() {
  return useQuery(Queries.PRODUCT_TAGS, getProductTags);
}

import Axios from 'axios';
import { VendResponse } from 'lib';
import { useQuery } from 'react-query';
import { Default, Queries } from 'utils/keys';
import { Product, ProductPropertyOptions } from './types';

// Base Options
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API as string,
});

//* -------------------------------------------------
// Get All Products

export async function getAllProducts(
  version?: number,
  pageSize?: number,
): Promise<VendResponse<Product[]>> {
  if (!version && !pageSize) {
    return await axios.get(`/products`).then((res: any) => res.data);
  }
  return await axios
    .get(
      `/products?version=${version || 0}&page_size=${
        pageSize || Default.MAX_PRODUCTS_PER_QUERY
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
// Get SINGLE Product by ID

export async function getProductById(
  id: string,
): Promise<VendResponse<Product>> {
  return await axios.get(`/products/${id}`).then((res: any) => res.data);
}

export function useGetProductById(id: string) {
  return useQuery([Queries.PRODUCT_BY_ID, id], () => getProductById(id));
}

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

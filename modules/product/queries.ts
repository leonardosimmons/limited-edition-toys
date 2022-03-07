import axios from 'axios';
import { VendResponse } from 'lib';
import { useQuery } from 'react-query';
import { Default, Queries } from 'utils/keys';
import { ProductModel } from './product.model';
import { VendProduct, ProductInventory, ProductPropertyOptions } from './types';

//* -------------------------------------------------
// Get All Products

export async function getAllProducts(): Promise<VendProduct[]> {
  return await ProductModel.getAll();
}

export function useGetAllProducts() {
  return useQuery(Queries.ALL_PRODUCTS, getAllProducts);
}

//* -------------------------------------------------
// Get All Product Tags

export async function getProductTags(): Promise<ProductPropertyOptions[]> {
  return await axios
    .get(process.env.NEXT_PUBLIC_PRODUCT_TAGS_API as string)
    .then((res: any) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function useProductTags() {
  return useQuery(Queries.PRODUCT_TAGS, () => getProductTags());
}

//* -------------------------------------------------
// Get Paginated Products

export async function getPaginatedProducts(
  version = 0,
  pageSize?: number,
): Promise<VendResponse<VendProduct[]>> {
  return await axios
    .get(
      (process.env.NEXT_PUBLIC_PRODUCTS_API as string) +
        `?version=${version}&page_size=${
          pageSize || Default.MAX_PRODUCTS_PER_QUERY
        }`,
    )
    .then((res: any) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function useGetPaginatedProducts(version = 0, pageSize?: number) {
  return useQuery(
    [Queries.PAGINATED_PRODUCTS, version],
    () => getPaginatedProducts(version, pageSize),
    {
      keepPreviousData: true,
    },
  );
}

//* -------------------------------------------------
// Get SINGLE Product by ID

export async function getProductById(id: string): Promise<VendProduct> {
  return await axios
    .get((process.env.NEXT_PUBLIC_PRODUCTS_API as string) + `/${id}`)
    .then((res: any) => res.data)
    .then((vend: VendResponse<VendProduct>) => vend.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function useGetProductById(id: string) {
  return useQuery(id, () => getProductById(id));
}

//* -------------------------------------------------
// Get SINGLE Inventory by ID

export async function getInventoryById(
  id: string,
): Promise<ProductInventory[]> {
  return await axios
    .get(
      (process.env.NEXT_PUBLIC_PRODUCTS_API as string) + `/inventory?id=${id}`,
    )
    .then((res: any) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export function useGetInventoryById(id: string) {
  return useQuery([`${Queries.INVENTORY_BY_ID}-${id}`, id], () =>
    getInventoryById(id),
  );
}

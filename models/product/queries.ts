import axios from 'axios';
import { useQuery } from 'react-query';
import { Queries } from 'utils/keys';
import { ProductTagInfo } from './types';

const { NEXT_PUBLIC_PRODUCT_TAGS_API } = process.env;

// [TAGS] Get All -------------------------------------------------

export async function getProductTags(): Promise<ProductTagInfo[]> {
  return await axios
    .get(NEXT_PUBLIC_PRODUCT_TAGS_API as string)
    .then((res: any) => res.data);
}

export function useProductTags() {
  return useQuery(Queries.PRODUCT_TAGS, getProductTags);
}

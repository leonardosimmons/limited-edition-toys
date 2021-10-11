import axios from 'axios';
import { useQuery } from 'react-query';
import { Queries } from 'utils/keys';
import { ProductTagInfo } from './types';

export async function getProductTags(): Promise<ProductTagInfo[]> {
  return await axios.get('/api/products/tags').then((res: any) => res.data);
}

export function useProductTags() {
  return useQuery(Queries.PRODUCT_TAGS, getProductTags);
}

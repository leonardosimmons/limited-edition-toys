import axios from 'axios';
import { useQuery } from 'react-query';
import { Queries } from 'utils/keys';
import { Promotion } from './types';

export async function getPromotions(): Promise<Promotion[]> {
  return await axios
    .get(`/api/promotions`)
    .then((res: any) => res.data)
    .catch((err: any) => {
      throw new Error(err);
    });
}

export function useGetPromotions() {
  return useQuery(Queries.PRODUCT_PROMOTIONS, getPromotions);
}

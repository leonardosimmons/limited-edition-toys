import { Queries } from 'utils/keys';
import { useQuery } from 'react-query';
import { Wordpress } from './wordpress.model';

//* USER ---------------------------------------------------

export async function getWordpressUser() {
  return await new Wordpress().user();
}

export function useWordpressUser() {
  return useQuery(Queries.WORDPRESS_USER, getWordpressUser);
}
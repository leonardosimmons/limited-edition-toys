import { Queries } from 'utils/keys';
import { useQuery } from 'react-query';
import { Wordpress } from '../wordpress/wordpress.model';

export async function getUser() {
  return await new Wordpress().user();
}

export function useUserInfo() {
  return useQuery(Queries.USER, getUser);
}
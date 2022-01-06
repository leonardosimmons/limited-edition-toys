import { useQuery } from 'react-query';
import { Queries } from 'utils/keys';
import { UserModel } from './user.model';

export async function getUser() {
  return await new UserModel().get();
}

export function useUserInfo() {
  return useQuery(Queries.USER, getUser);
}
import { useQuery } from 'react-query';
import { Queries } from 'utils/keys';

import { AuthorizationModel } from 'modules/auth/auth.model';

export async function getAuthSession() {
  return new AuthorizationModel().getAuthSession();
}

export function useAuthSession() {
  return useQuery(Queries.USER_SESSION, getAuthSession);
}

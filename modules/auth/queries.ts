import { useQuery } from 'react-query';
import { Queries } from 'utils/keys';

import { AuthorizationModel } from 'modules/auth/auth.model';

export async function getCurrentSession() {
  return new AuthorizationModel().getCurrentSession();
}

export function useCurrentSession() {
  return useQuery(Queries.USER_SESSION, getCurrentSession);
}

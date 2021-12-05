import { useQuery } from 'react-query';
import { Queries } from 'utils/keys';
import { UserSessionToken } from '../user/types';

import { AuthorizationModel } from 'modules/auth/auth.model';

export async function getCurrentSession(): Promise<UserSessionToken> {
  return new AuthorizationModel().getCurrentSession();
}

export function useCurrentSession() {
  return useQuery(Queries.USER_SESSION, getCurrentSession);
}

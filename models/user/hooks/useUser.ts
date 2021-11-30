import { QueryClient, useMutation } from 'react-query';
import { UserOptions, UserSessionToken } from '../types';
import { RouteConfirmation } from 'utils/types';
import { Queries } from 'utils/keys';

import { useCurrentSession } from 'models/auth/queries';
import { UserModel } from '../user.model';

function useUser(options?: UserOptions) {
  const model = new UserModel();
  const { status: sessionStatus, data: session, error } = useCurrentSession();

  //* -------------------------------------------------
  // Mutations

  const guestLogin = useMutation(
    Queries.LOGIN_GUEST,
    () => model.guestLogin(),
    {
      onSuccess: (token: UserSessionToken | RouteConfirmation | undefined) => {
        if (token && (token as UserSessionToken)) {
          const queryClient = new QueryClient();
          queryClient.setQueryData(Queries.USER_SESSION, token);
        }
      },
    },
  );

  return {
    guest: {
      login: guestLogin.mutate,
    },
    session: {
      current: session,
      status: sessionStatus,
    },
  };
}

export { useUser };

import React from 'react';
import { UserOptions } from '../types';
import { useMutation, useQueryClient } from 'react-query';
import { RouteConfirmation } from 'utils/types';

import { Queries } from 'utils/keys';
import { IronSession } from 'iron-session';
import { UserModel } from '../user.model';
import { useSession } from 'models/auth/queries';

function useUser(options?: UserOptions) {
  const model = new UserModel();
  const queryClient = useQueryClient();
  const { status: sessionStatus, data: session } = useSession();

  //* -------------------------------------------------
  // Mutations

  const guestLogin = useMutation(() => model.guestLogin(), {
    onSuccess: (token: string | RouteConfirmation) => {
      if ((token as IronSession).accessToken) {
        queryClient.setQueryData(
          Queries.AUTH_SESSION,
          (token as IronSession).accessToken,
        );
      }
    },
  });

  //* -------------------------------------------------
  // Actions

  return {
    guest: {
      login: guestLogin,
    },
    session: {
      current: session,
      status: sessionStatus,
    },
  };
}

export { useUser };

import { UserOptions } from '../types';
import { useMutation } from 'react-query';
import { RouteConfirmation } from 'utils/types';

import { UserModel } from '../user.model';

function useUser(options?: UserOptions) {
  const model = new UserModel();

  //* -------------------------------------------------
  // Mutations

  const guestLogin = useMutation(() => model.guestLogin(), {
    onSuccess: (status: RouteConfirmation) => {},
  });

  return {
    guest: {
      login: guestLogin,
    },
  };
}

export { useUser };

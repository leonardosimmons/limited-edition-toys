import React from 'react';

import { useLogin } from './useLogin';
import { useAuthSession } from 'modules/auth/queries';

function useSessionCheck() {
  const login = useLogin();
  const { status, data: session, error } = useAuthSession();

  React.useEffect(() => {
    if (status !== 'loading') {
      if (session && session.id && login.status === 'guest') {
        login.update('signed-in');
      }
    }
  }, [status]);

  React.useEffect(() => {
    if (status !== 'loading') {
      if (session && !session.id && login.status === 'signed-in') {
        login.update('guest');
      }
    }
  }, [status]);

  return {
    error,
    session,
    status,
  };
}

export { useSessionCheck };

import React from 'react';

import { useCurrentSession } from 'models/auth/queries';
import { useUser } from 'models/user/hooks/useUser';

function useSessionCheck() {
  const user = useUser();
  const { status, data: session, error } = useCurrentSession();

  React.useEffect(() => {
    if (status !== 'loading') {
      if (session && !session.sub) {
        // user.guest.login();
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

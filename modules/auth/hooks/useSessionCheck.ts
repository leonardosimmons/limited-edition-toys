import React from 'react';

import { useCurrentSession } from 'modules/auth/queries';
import { useUser } from 'modules/user/hooks/useUser';

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

import { WordpressUser } from '../wordpress/types';
import { useWordpress } from '../wordpress/hooks/useWordpress';
import { useAuthSession } from '../auth/queries';

function useUser() {
  const { status, data: session, error } = useAuthSession();
  const wordpress = useWordpress();

  return {
    auth: {
      error,
      session,
      status,
    },
    error: wordpress.user.error,
    info: wordpress.user.current as WordpressUser,
    status: wordpress.user.status,
    update: {
      info: wordpress.user.update.info.mutate
    }
  };
}

export { useUser };

import { WordpressUser } from '../../wordpress/types';
import { useWordpress } from '../../wordpress/hooks/useWordpress';

function useUser() {
  const wordpress = useWordpress();

  return {
    error: wordpress.user.error,
    info: wordpress.user.current as WordpressUser,
    status: wordpress.user.status,
  };
}

export { useUser };

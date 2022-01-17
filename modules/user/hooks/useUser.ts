import { useUserInfo } from '../queries';
import { WordpressUser } from '../../wordpress/types';

function useUser() {
  const { status, data: info, error } = useUserInfo()

  return {
    error,
    info: info as WordpressUser,
    status,
  };
}

export { useUser };

import { useUserInfo } from '../queries';

function useUser() {
  const { status, data: info, error } = useUserInfo()

  return {
    error,
    info,
    status,
  };
}

export { useUser };

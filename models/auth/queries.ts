import axios from 'axios';
import { useQuery } from 'react-query';
import { Queries } from 'utils/keys';

//* -------------------------------------------------
// Sessions

export async function getCurrentSession() {
  return await axios
    .get('/api/auth/session')
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function useSession() {
  return useQuery(Queries.AUTH_SESSION, getCurrentSession);
}

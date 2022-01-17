import axios from 'axios';
import { WordpressUser } from '../types';
import { Constructor } from '../../../utils/types';

export function WordpressUserModel<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    async user(): Promise<WordpressUser> {
      return await axios
        .get('/api/user/info')
        .then((res) => res.data)
        .then((data) => (data as any).user);
    }
  };
}

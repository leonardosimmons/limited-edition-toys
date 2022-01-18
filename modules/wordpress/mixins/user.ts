import axios from 'axios';
import { WordpressUser } from '../types';
import { Constructor, KeyValuePair } from '../../../utils/types';

export function WordpressUserModel<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    async user(): Promise<WordpressUser> {
      return await axios
        .get('/api/wordpress/user')
        .then((res) => res.data)
        .then((data) => (data as any).user);
    }

    async updateUser(update: KeyValuePair<keyof WordpressUser, any>) {
      return await axios
        .post('/api/wordpress/user', {
          key: update.key,
          value: update.value,
        })
        .then((res) => res.data)
        .then((data) => (data as any).update);
    }
  };
}

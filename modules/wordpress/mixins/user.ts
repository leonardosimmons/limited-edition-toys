import axios from 'axios';
import { WordpressBase } from './base';
import { Constructor } from '../../../utils/types';

export function WordpressUserModel<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    async user() {
      return await axios
        .get('/api/user/info')
        .then((res) => res.data)
        .then((data) => (data as any).user);
    }
  };
}

export const WordpressUser = WordpressUserModel(WordpressBase);
export type WordpressUser = InstanceType<typeof WordpressUser>;
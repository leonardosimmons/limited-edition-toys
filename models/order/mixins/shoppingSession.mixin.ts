import axios from 'axios';
import { Constructor } from '../../../utils/types';

class Base {
  constructor() {}
}

export function ShoppingSession<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    async initShoppingSession() {
      try {
        return await axios
          .post('/api/order/shopping-session')
          .then((res: any) => res.data);
      } catch (err: any) {
        throw new Error(err);
      }
    }
  };
}

export const ShoppingSessionType = ShoppingSession(Base);

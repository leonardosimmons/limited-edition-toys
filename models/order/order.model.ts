import { ShoppingSessionType } from './mixins/shoppingSession.mixin';
import { SquareOrderTokensType } from '../square/mixins/order.tokens.mixin';

class Order {
  constructor() {}

  // create product in database
  // create cart items in db
  // create order in database
}

export const OrderModel = SquareOrderTokensType(ShoppingSessionType(Order));
export type OrderModel = InstanceType<typeof OrderModel>;

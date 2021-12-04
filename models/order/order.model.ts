import { ShoppingSessionType } from './mixins/shoppingSession.mixin';
import { SquareOrderTokensType } from '../square/mixins/order.tokens.mixin';
import { SquareModel } from 'models/square/square.model';

class Order {
  constructor() {}

  // create product in database
  // create cart items in db
  // create order in database
}

export const OrderModel = SquareOrderTokensType(
  ShoppingSessionType(SquareModel),
);
export type OrderModel = InstanceType<typeof OrderModel>;

import { ProductCartToken } from 'models/product/types';

interface CartModelInterface {}

class CartModel implements CartModelInterface {
  static getCount(items: ProductCartToken[]): number {
    let count: number = 0;
    items.forEach((item: ProductCartToken) => {
      count = count + item.quantity;
    });
    return count;
  }

  static getTotal(items: ProductCartToken[]): number {
    let total: number = 0;
    items.forEach((item: ProductCartToken) => {
      total = total + item.total;
    });
    return total;
  }
}

export { CartModel };

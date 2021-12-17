import axios from 'axios';
import { ProductCartToken } from 'modules/product/types';
import { CartSessionToken } from '../types';

function useCartSession() {
  async function get(): Promise<CartSessionToken[]> {
    try {
      return await axios.get('/api/cart/session').then((res) => res.data);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async function updateQuantity(
    token: CartSessionToken,
  ): Promise<CartSessionToken> {
    try {
      return await axios
        .patch('/api/cart/session', token)
        .then((res) => res.data);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async function add(token: CartSessionToken): Promise<CartSessionToken> {
    try {
      return await axios
        .post('/api/cart/session', token)
        .then((res) => res.data);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async function remove(sku: string) {
    try {
      return await axios
        .delete('/api/cart/session', { data: { sku } })
        .then((res) => res.data);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  //* -------------------------------------------------
  // Handlers

  async function handleQuantityChange(
    id: string,
    tokens: ProductCartToken[],
    operand?: 'subtract' | 'add',
    quantity?: number,
  ): Promise<void> {
    const sessionCart = await get();
    if (sessionCart) {
      tokens.forEach((item) => {
        if (item.product.id === id) {
          sessionCart.forEach((sItem) => {
            if (sItem.sku === item.product.sku) {
              updateQuantity({
                sku: sItem.sku,
                quantity: operand
                  ? operand === 'add'
                    ? item.quantity + 1
                    : item.quantity - 1
                  : quantity!,
                stock: item.stock,
                discountId: sItem.discountId || undefined,
              }).then((res) => console.log(res));
            }
          });
        }
      });
    }
  }

  return {
    add,
    get,
    remove,
    updateQuantity: handleQuantityChange,
  };
}

export { useCartSession };

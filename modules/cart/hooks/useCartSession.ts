import axios from 'axios';
import { CartSessionToken } from '../types';

function useCartSession() {
  async function get(): Promise<CartSessionToken> {
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

  async function remove(sku: number) {
    try {
      return await axios
        .delete('/api/cart/session', { data: { sku: sku } })
        .then((res) => res.data);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  return {
    add,
    get,
    remove,
    updateQuantity,
  };
}

export { useCartSession };

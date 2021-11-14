import React from 'react';
import { ProductCartToken } from 'models/product/types';
import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  addProductToCart,
  removeCartUser,
  removeProductFromCart,
  resetCart,
  setCartUser,
  updateCartStatus,
  updateProductQuantity,
  updateProductTotal,
} from '../actions';
import { cartSelector } from '../selectors';
import { CartStatus } from '../types';

export function useCart() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(cartSelector);

  //* -------------------------------------------------
  // Status

  // sets cart status to pending if items are in cart
  React.useEffect(() => {
    if (ctx.count > 0 && ctx.status === 'empty') {
      dispatch(updateCartStatus('pending'));
    }
  }, [ctx.count]);

  // sets cart status to empty if cart has no items
  React.useEffect(() => {
    if (ctx.count === 0 && ctx.status === 'pending') {
      dispatch(updateCartStatus('empty'));
    }
  }, [ctx.count]);

  //* -------------------------------------------------
  // Wrappers

  function add(token: ProductCartToken): void {
    dispatch(addProductToCart(token));
  }

  function remove(id: string): void {
    dispatch(removeProductFromCart(id));
  }

  function removeUser(): void {
    dispatch(removeCartUser());
  }

  function reset(): void {
    dispatch(resetCart());
  }

  function setUser(userId: string): void {
    dispatch(setCartUser(userId));
  }

  function updateQuantity(id: string, amount: number): void {
    dispatch(updateProductQuantity(id, amount));
  }

  function updateStatus(status: CartStatus): void {
    dispatch(updateCartStatus(status));
  }

  function updateTotal(id: string, newTotal: number): void {
    dispatch(updateProductTotal(id, newTotal));
  }

  //* -------------------------------------------------
  // Return

  return {
    ...ctx,
    add,
    remove,
    removeUser,
    reset,
    setUser,
    updateQuantity,
    updateStatus,
    updateTotal,
  };
}

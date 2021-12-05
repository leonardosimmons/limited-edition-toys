import React from 'react';
import { ProductCartToken } from 'modules/product/types';
import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  addCartItemQuantity,
  addProductToCart,
  removeCartUser,
  removeProductFromCart,
  resetCart,
  setCartUser,
  subtractCartItemQuantity,
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

  function addItemQuantity(id: string): void {
    dispatch(addCartItemQuantity(id));
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

  function subtractItemQuantity(id: string): void {
    dispatch(subtractCartItemQuantity(id));
  }

  function updateQuantity(id: string, amount: number): void {
    dispatch(updateProductQuantity(id, amount));
  }

  function updateStatus(status: CartStatus): void {
    dispatch(updateCartStatus(status));
  }

  function updateTotal(id: string): void {
    dispatch(updateProductTotal(id));
  }

  //* -------------------------------------------------
  // Return

  return {
    ...ctx,
    add,
    addItemQuantity,
    remove,
    removeUser,
    reset,
    setUser,
    subtractItemQuantity,
    updateQuantity,
    updateStatus,
    updateTotal,
  };
}

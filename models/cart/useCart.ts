import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { updateCartStatus } from './actions';
import { cartSelector } from './selectors';

export function useCart() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(cartSelector);

  // sets cart status to pending if items are in cart
  React.useEffect(() => {
    if (ctx.count > 0 && ctx.status === 'empty') {
      dispatch(updateCartStatus('pending'));
    }
  }, [ctx.items]);

  // sets cart status to empty of cart has no items
  React.useEffect(() => {
    if (ctx.count === 0 && ctx.status === 'pending') {
      dispatch(updateCartStatus('empty'));
    }
  }, [ctx.items]);

  return {
    count: ctx.count,
    items: ctx.items,
    status: ctx.status,
    total: ctx.total,
    userId: ctx.userId,
  };
}

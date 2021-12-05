import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  minusProductQuantity,
  plusProductQuantity,
  resetCurrentProductSelection,
  resetProduct,
  resetProductInventoryLevel,
  resetProductQuantity,
  setCurrentProductSelection,
  setProductInventoryLevel,
} from '../actions';
import { productSelector } from '../selectors';
import { Product } from '../types';

function useSingleProduct() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(productSelector);

  //* -------------------------------------------------
  // Wrappers

  function minusQuantity(): void {
    dispatch(minusProductQuantity());
  }

  function plusQuantity(): void {
    dispatch(plusProductQuantity());
  }

  function reset(): void {
    dispatch(resetProduct());
  }

  function resetInventory(): void {
    dispatch(resetProductInventoryLevel());
  }

  function resetQuantity(): void {
    dispatch(resetProductQuantity());
  }

  function resetSelection(): void {
    dispatch(resetCurrentProductSelection());
  }

  function setInventoryLevel(amount: number): void {
    dispatch(setProductInventoryLevel(amount));
  }

  function setSelection(product: Product): void {
    dispatch(setCurrentProductSelection(product));
  }

  return {
    ...ctx,
    minusQuantity,
    plusQuantity,
    reset,
    resetInventory,
    resetQuantity,
    resetSelection,
    setInventoryLevel,
    setSelection,
  };
}

export { useSingleProduct };

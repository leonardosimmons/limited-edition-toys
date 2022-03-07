import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { setFilteredProductList } from 'src/redux/models/page/actions';
import { pageSelector } from 'src/redux/models/page/selectors';
import {
  minusProductQuantity,
  plusProductQuantity,
  resetCurrentProductSelection,
  resetProduct,
  resetProductInventoryLevel,
  resetProductQuantity,
  setCurrentProductSelection,
  setProductInventoryLevel,
} from './actions';
import { ProductModel } from './product.model';
import { useGetAllProducts, useProductTags } from './queries';
import { VendProduct, ProductQueryOptions } from './types';

export function useProducts(options?: ProductQueryOptions) {
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageSelector);
  const { status, data: vend, error } = useGetAllProducts();
  const { status: tagStatus, data: tags, error: tagError } = useProductTags();

  //* -------------------------------------------------
  // Active products

  const activeProducts = React.useMemo(() => {
    return vend?.filter((v) => v.active);
  }, [vend]);

  //* -------------------------------------------------
  // Filtered products (if applicable)

  const filteredProducts: VendProduct[] | undefined = React.useMemo(() => {
    if (options?.filter?.value && options?.filter?.type && activeProducts) {
      return ProductModel.filterList(
        options?.filter?.value,
        options?.filter?.type,
        activeProducts,
        tags,
      );
    }
  }, [options?.filter?.value, options?.filter?.type, activeProducts, tags]);

  React.useEffect(() => {
    if (filteredProducts && filteredProducts !== []) {
      dispatch(setFilteredProductList(filteredProducts));
    }
  }, [filteredProducts]);

  //* -------------------------------------------------
  // Wrappers

  function minusQuantity(): void {
    dispatch(minusProductQuantity());
  }

  function plusQuantity(): void {
    dispatch(plusProductQuantity());
  }

  function resetQuantity(): void {
    dispatch(resetProductQuantity());
  }

  function reset(): void {
    dispatch(resetProduct());
  }

  function resetInventory(): void {
    dispatch(resetProductInventoryLevel());
  }

  function resetSelection(): void {
    dispatch(resetCurrentProductSelection());
  }

  function setInventoryLevel(amount: number): void {
    dispatch(setProductInventoryLevel(amount));
  }

  function setSelection(product: VendProduct): void {
    dispatch(setCurrentProductSelection(product));
  }

  //* -------------------------------------------------
  // Return

  return {
    products: {
      error,
      ...page.products,
      list: activeProducts as VendProduct[],
      status,
    },
    tags: {
      error: tagError,
      list: tags,
      status: tagStatus,
    },
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

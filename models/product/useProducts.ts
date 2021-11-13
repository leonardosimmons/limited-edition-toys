import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { setFilteredProductList } from 'src/redux/models/page/actions';
import { pageSelector } from 'src/redux/models/page/selectors';
import { ProductModel } from './product.model';
import { useGetAllProducts, useProductTags } from './queries';
import { Product, ProductQueryOptions } from './types';

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

  const filteredProducts: Product[] | undefined = React.useMemo(() => {
    if (options?.filter?.value && options?.filter.type && activeProducts) {
      return ProductModel.filterList(
        options?.filter?.value,
        options?.filter.type,
        activeProducts,
        tags,
      );
    }
    return [];
  }, [options?.filter?.value, options?.filter?.type, activeProducts, tags]);

  React.useEffect(() => {
    if (filteredProducts && filteredProducts !== []) {
      dispatch(setFilteredProductList(filteredProducts));
    }
  }, [filteredProducts]);

  //* -------------------------------------------------
  // Return

  return {
    products: {
      error,
      ...page.products,
      list: activeProducts as Product[],
      status,
    },
    tags: {
      error: tagError,
      list: tags,
      status: tagStatus,
    },
  };
}

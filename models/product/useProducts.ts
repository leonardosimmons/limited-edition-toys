import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { setFilteredProductList } from 'src/redux/models/page/actions';
import { pageSelector } from 'src/redux/models/page/selectors';
import { ProductModel } from './product.model';
import { useGetAllProducts } from './queries';
import { Product, ProductFilterOptions } from './types';

export function useProducts(
  filter?: string | string[],
  options?: ProductFilterOptions,
) {
  const model = new ProductModel();
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageSelector);
  const { status, data: vend, error } = useGetAllProducts();

  //* -------------------------------------------------
  // filters products based on provided params (if applicable)

  const filteredProducts: Product[] | undefined = React.useMemo(() => {
    if (filter && options && vend) {
      return model.filter(filter, options, vend);
    }

    return [];
  }, [filter, options, vend]);

  React.useEffect(() => {
    if (filteredProducts && filteredProducts !== []) {
      dispatch(
        setFilteredProductList(page.products.filtered.concat(filteredProducts)),
      );
    }
  }, [filteredProducts]);

  //* -------------------------------------------------
  // Return

  return {
    error,
    products: {
      ...page.products,
      list: vend,
    },
    status,
  };
}

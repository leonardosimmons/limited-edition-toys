import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { setFilteredProductList } from 'src/redux/models/page/actions';
import { pageSelector } from 'src/redux/models/page/selectors';
import { ProductModel } from './product.model';
import { useGetAllProducts, useProductTags } from './queries';
import { Product, ProductQueryOptions } from './types';

export function useProducts(options?: ProductQueryOptions) {
  const model = new ProductModel();
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageSelector);
  const { status, data: vend, error } = useGetAllProducts();
  const { status: tagStatus, data: tags, error: tagError } = useProductTags();

  //* -------------------------------------------------
  // filters products based on provided params (if applicable)

  const filteredProducts: Product[] | undefined = React.useMemo(() => {
    if (options?.filter?.value && options?.filter.type && vend) {
      return model.filter(options?.filter?.value, options?.filter.type, vend);
    }

    return [];
  }, [options?.filter?.value, options?.filter?.type, vend]);

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
    products: {
      error,
      ...page.products,
      list: vend as Product[],
      status,
    },
    tags: {
      error: tagError,
      list: tags,
      status: tagStatus,
    },
  };
}

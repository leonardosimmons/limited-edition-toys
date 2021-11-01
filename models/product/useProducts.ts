import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { setFilteredProductList } from 'src/redux/models/page/actions';
import { pageSelector } from 'src/redux/models/page/selectors';
import { useGetAllProducts } from './queries';
import { Product, ProductType } from './types';

export function useProducts(filter?: string | string[]) {
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageSelector);
  const { status, data: vend, error } = useGetAllProducts();

  //* -------------------------------------------------
  // filters products based on provided params (if applicable)

  const filteredProducts: Product[] | undefined = React.useMemo(() => {
    if (filter) {
      const b: Product[] = [];
      vend?.forEach((p: Product) => {
        p.categories?.forEach((c: Partial<ProductType>) => {
          if (Array.isArray(filter)) {
            filter.forEach((name) => {
              if (c.name === name && !b.includes(p) && p !== undefined) {
                b.push(p);
              }
            });
          } else {
            if (c.name === filter && !b.includes(p) && p !== undefined) {
              b.push(p);
            }
          }
        });
      });
      return b;
    }

    return [];
  }, [filter, vend]);

  React.useEffect(() => {
    if (filteredProducts && filteredProducts !== []) {
      dispatch(
        setFilteredProductList(
          page.products.filtered.concat(filteredProducts.slice(0)),
        ),
      );
    }
  }, [filteredProducts]);

  return {
    error,
    products: {
      ...page.products,
      list: vend,
    },
    status,
  };
}

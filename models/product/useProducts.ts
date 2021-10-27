import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  setCurrentPaginationVersion,
  setCurrentProductList,
  setPreviousPaginationVersion,
} from 'src/redux/models/page/actions';
import { pageSelector } from 'src/redux/models/page/selectors';
import { useGetAllProducts } from './queries';
import { Product, ProductType } from './types';

export function useProducts(filter?: string | string[]) {
  const dispatch = useAppDispatch();
  const page = useAppSelector(pageSelector);
  const { status, data: vend, error } = useGetAllProducts(page.version.current);

  //* -------------------------------------------------
  // filters products based on provided params (if applicable)

  const buffer: Product[] | undefined = React.useMemo(() => {
    if (filter) {
      const b: Product[] = [];
      vend?.data.forEach((p: Product) => {
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

    // return raw data if no filter was provided
    return vend?.data;
  }, [vend?.data]);

  //* -------------------------------------------------
  // places items from buffer into products array

  React.useEffect(() => {
    if (buffer && buffer !== []) {
      dispatch(setCurrentProductList(page.products.concat(buffer)));
    }
  }, [buffer]);

  //* -------------------------------------------------
  // updates version once products are set

  React.useEffect(() => {
    if (buffer !== []) {
      const ver: number | undefined = vend?.version.max;
      if (ver) {
        dispatch(setPreviousPaginationVersion(page.version.current));
        dispatch(setCurrentPaginationVersion(ver));
      }
    }
  }, [page.products]);

  return {
    error,
    products: page.products,
    status,
  };
}

import React from 'react';
import { Default } from 'utils/keys';
import { useGetAllProducts } from './queries';
import { Product, ProductType } from './types';

export function useProducts(filter?: string | string[]) {
  const [version, setVersion] = React.useState<number>(0);
  const { status, data: vend, error } = useGetAllProducts(version);

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

  const [products, setProducts] = React.useState<Product[]>([]);
  React.useEffect(() => {
    if (buffer && buffer !== []) {
      setProducts((state) => state.concat(buffer));
    }
  }, [buffer]);

  //* -------------------------------------------------
  // updates version once products are set

  React.useEffect(() => {
    if (buffer !== []) {
      const ver: number | undefined = vend?.version.max;
      if (ver) {
        setVersion(ver);
      }
    }
  }, [products]);

  return {
    error,
    products,
    status,
  };
}

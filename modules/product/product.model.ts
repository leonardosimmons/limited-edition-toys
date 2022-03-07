import { VendResponse } from 'lib';
import { getPaginatedProducts } from './queries';
import {
  VendProduct,
  ProductFilterOptions,
  ProductPropertyOptions,
  ProductType,
} from './types';

interface ProductModelInterface {}

class ProductModel implements ProductModelInterface {
  private static productQueryChunkSize: number = parseInt(
    process.env.NEXT_PUBLIC_PRODUCT_CHUNK_QUERY_AMOUNT as string,
  );

  static filterList(
    filter: string | string[],
    options: ProductFilterOptions,
    products: VendProduct[],
    tags?: Partial<ProductPropertyOptions>[],
  ): VendProduct[] {
    const buffer: VendProduct[] = [];
    products.forEach((p: VendProduct) => {
      switch (options) {
        case 'category':
          p.categories?.forEach((c: Partial<ProductType>) => {
            if (Array.isArray(filter)) {
              filter.forEach((name) => {
                if (c.name === name && !buffer.includes(p)) {
                  buffer.push(p);
                }
              });
            } else {
              if (c.name === filter && !buffer.includes(p)) {
                buffer.push(p);
              }
            }
          });
          break;
        case 'name':
          if (
            RegExp(filter as string).test(p.name) &&
            !buffer.includes(p) &&
            p.active
          ) {
            buffer.push(p);
          }
          break;
        case 'search':
          if (
            RegExp(filter as string).test(p.name) &&
            !buffer.includes(p) &&
            p.active
          ) {
            buffer.push(p);
          }
          p.categories?.forEach((category) => {
            if (category.name === (filter as string) && !buffer.includes(p)) {
              buffer.push(p);
            }
          });
          tags?.forEach((tag) => {
            if (tag.name === filter) {
              p.tag_ids?.forEach((id) => {
                if (id === tag.id && !buffer.includes(p)) {
                  buffer.push(p);
                }
              });
            }
          });
          break;
        case 'tag':
          p.tag_ids?.forEach((t: string) => {
            if (Array.isArray(filter)) {
              filter.forEach((tag) => {
                if (t == tag && !buffer.includes(p)) {
                  buffer.push(p);
                }
              });
            } else {
              if (t === filter && !buffer.includes(p)) {
                buffer.push(p);
              }
            }
          });
          break;
        case 'temp-fix':
          p.categories?.forEach((category: Partial<ProductType>) => {
            if (Array.isArray(filter)) {
              filter.forEach((item) => {
                if (
                  item === category.name?.toLowerCase() &&
                  !buffer.includes(p)
                ) {
                  buffer.push(p);
                }
              });
            }
          });
          break;
        default:
          break;
      }
    });
    return buffer;
  }

  static async getAll(): Promise<VendProduct[]> {
    try {
      return await getPaginatedProducts(0, this.productQueryChunkSize)
        .then((vend: VendResponse<VendProduct[]>) => vend)
        .then(async (firstSet: VendResponse<VendProduct[]>) => {
          const secondSet: VendResponse<VendProduct[]> = await getPaginatedProducts(
            firstSet.version.max,
            this.productQueryChunkSize,
          ).then((vend: VendResponse<VendProduct[]>) => vend);
          return {
            data: [...firstSet.data, ...secondSet.data],
            version: secondSet.version,
          };
        })
        .then(async (currentSet: VendResponse<VendProduct[]>) => {
          const thirdSet: VendProduct[] = await getPaginatedProducts(
            currentSet.version.max,
            this.productQueryChunkSize,
          ).then((vend: VendResponse<VendProduct[]>) => vend.data);
          return [...currentSet.data, ...thirdSet];
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export { ProductModel };

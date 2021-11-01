import { VendResponse } from 'lib';
import { getPaginatedProducts } from './queries';
import { Product } from './types';

interface ProductModelInterface {
  getAll(): Promise<Product[]>;
}

class ProductModel implements ProductModelInterface {
  private productQueryChunkSize: number = parseInt(
    process.env.NEXT_PUBLIC_PRODUCT_CHUNK_QUERY_AMOUNT as string,
  );

  public async getAll(): Promise<Product[]> {
    try {
      return await getPaginatedProducts(0, this.productQueryChunkSize)
        .then((vend: VendResponse<Product[]>) => vend)
        .then(async (firstSet: VendResponse<Product[]>) => {
          const secondSet: VendResponse<Product[]> = await getPaginatedProducts(
            firstSet.version.max,
            this.productQueryChunkSize,
          ).then((vend: VendResponse<Product[]>) => vend);
          return {
            data: [...firstSet.data, ...secondSet.data],
            version: secondSet.version,
          };
        })
        .then(async (currentSet: VendResponse<Product[]>) => {
          const thirdSet: Product[] = await getPaginatedProducts(
            currentSet.version.max,
            this.productQueryChunkSize,
          ).then((vend: VendResponse<Product[]>) => vend.data);
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

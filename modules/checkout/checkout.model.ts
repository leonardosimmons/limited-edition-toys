import { Customer, OrderLineItem } from 'square';
import { ProductCheckoutToken } from '../product/types';
import { CheckoutSuccessToken } from './types';
import { VendApi } from '../../lib';

class CheckoutModel {
  createCheckoutDataToken(customer: Customer, items: ProductCheckoutToken[]): CheckoutSuccessToken {
    return {
      items,
      shipping: {
        firstname: customer.givenName!,
        lastname: customer.familyName!,
        address: customer.address?.addressLine1!,
        city: customer.address?.locality!,
        apt: customer.address?.addressLine2 || '',
        state:
          customer.address?.administrativeDistrictLevel1?.toUpperCase() as string,
        postcode: customer.address?.postalCode!,
      },
    } as CheckoutSuccessToken
  }

  async createProductCheckoutToken(customer: Customer, items: OrderLineItem[]): Promise<ProductCheckoutToken[]> {
    const buffer: ProductCheckoutToken[] = [];
    await Promise.all(
      items.map((item) =>
        this.validateCheckoutToken(item),
      ),
    )
      .then((values) => {
        values.forEach((token) => {
          if (token) {
            buffer.push(token);
          }
        });
      })
      .catch((err: any) => console.log(err.response.data.errors));
    return buffer;
  }

  async validateCheckoutToken(
    item: OrderLineItem,
  ): Promise<ProductCheckoutToken | undefined> {
    if (item.name !== 'Shipping') {
      return await this.getProductCheckoutToken(item);
    }
  }

  async getProductCheckoutToken(
    item: OrderLineItem,
  ): Promise<ProductCheckoutToken> {
    return VendApi.get(`/products/${item.uid}`)
      .then((res: any) => res.data)
      .then((product: any) => {
        return {
          name: item.name,
          quantity: parseInt(item.quantity),
          price: product.data.price_excluding_tax.toString(),
        } as ProductCheckoutToken;
      });
  }
}

export { CheckoutModel };
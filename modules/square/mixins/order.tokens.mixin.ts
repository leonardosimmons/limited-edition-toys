import { BillingState, ShippingState } from 'modules/checkout/types';
import { ProductCartToken } from 'modules/product/types';
import { CreateCustomerRequest, OrderLineItem } from 'square';
import { Constructor } from '../../../utils/types';

export function SquareOrderTokensType<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createCustomerToken(
      info: BillingState | ShippingState,
    ): CreateCustomerRequest {
      return {
        givenName: info.firstname,
        familyName: info.lastname,
        emailAddress: info.email,
        phoneNumber: info.phone,
        companyName: info.company,
        address: {
          firstName: info.firstname,
          lastName: info.lastname,
          addressLine1: info.address,
          addressLine2: info.apt as string,
          locality: info.city,
          postalCode: info.postcode,
          organization: info.company,
          country: 'US',
          administrativeDistrictLevel1: info.state,
        },
      };
    }
    createLineItemToken(
      products: ProductCartToken[],
    ): Partial<OrderLineItem[]> {
      let total: number = 0;
      const list: OrderLineItem[] = [];
      products.forEach((token) => {
        total = total + token.discount!.price;
        list.push({
          name: token.product.name,
          quantity: token.quantity.toString(),
          basePriceMoney: {
            amount: BigInt(
              token.discount!.price * 100,
            ).toString() as unknown as bigint,
            currency: 'USD',
          },
        });
      });
      list.push({
        name: 'Shipping',
        quantity: '1',
        basePriceMoney: {
          amount: BigInt(
            Math.round((10 + total * 0.025) * 100),
          ).toString() as unknown as bigint,
          currency: 'USD',
        },
      });
      return list;
    }
  };
}

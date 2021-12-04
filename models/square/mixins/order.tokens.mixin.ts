import { BillingState, ShippingState } from 'models/checkout/types';
import { ProductCartToken } from 'models/product/types';
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
      return products.map((token) => {
        return {
          name: token.product.name,
          quantity: token.quantity.toString(),
          basePriceMoney: {
            amount: (token.product.price_excluding_tax! *
              100) as unknown as bigint,
            currency: 'USD',
          },
        };
      });
    }
  };
}

import React from 'react';
import { ShippingState } from '../../../../types';
import { capitalizeFirstLetters } from '../../../../../../lib/functions';

import {
  CheckoutShippingAddress,
  CheckoutShippingHeading,
  CheckoutShippingWrapper,
} from './CheckoutSuccessShippingStyles';

type Props = {
  shipping: ShippingState;
};

const CheckoutSuccessShipping: React.FunctionComponent<Props> = ({
  shipping,
}): JSX.Element => {
  return (
    <CheckoutShippingWrapper>
      <CheckoutShippingHeading variant={'h3'}>
        {'Shipping Address'}
      </CheckoutShippingHeading>
      <CheckoutShippingAddress variant={'body1'}>
        {`${capitalizeFirstLetters(
          shipping.firstname,
        )} ${capitalizeFirstLetters(shipping.lastname)}`}
      </CheckoutShippingAddress>
      <CheckoutShippingAddress variant={'body1'}>
        {`${shipping.address} ${shipping.apt || ''}`}
      </CheckoutShippingAddress>
      <CheckoutShippingAddress variant={'body1'}>
        {`${capitalizeFirstLetters(shipping.city)}, ${capitalizeFirstLetters(shipping.state.toUpperCase(),)} ${shipping.postcode}`}
      </CheckoutShippingAddress>
    </CheckoutShippingWrapper>
  );
};

export default CheckoutSuccessShipping;

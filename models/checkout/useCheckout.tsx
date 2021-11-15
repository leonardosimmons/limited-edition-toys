import { useAppDispatch, useAppSelector } from 'src/redux';
import { BillingState, ShippingState } from './types';
import { updateBillingDetails, updateShippingDetails } from './actions';
import { checkoutSelector } from './selector';

function useCheckout() {
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(checkoutSelector);

  function updateBilling(key: keyof BillingState, value: string): void {
    dispatch(updateBillingDetails(key, value));
  }

  function updateShipping(
    key: keyof ShippingState | null,
    value: string | ShippingState,
  ): void {
    dispatch(updateShippingDetails(key, value));
  }

  return {
    ...ctx,
    updateBilling,
    updateShipping,
  };
}

export { useCheckout };

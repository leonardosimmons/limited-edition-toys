import { useAppDispatch, useAppSelector } from 'src/redux';
import { BillingState, ShippingState } from './types';
import { updateBillingDetails, updateShippingDetails } from './actions';
import { checkoutSelector } from './selector';
import useValidation from 'lib/hooks/useValidation';
import { setShippingCheckbox } from 'src/redux/models/ui';

function useCheckout() {
  const validate = useValidation();
  const dispatch = useAppDispatch();
  const ctx = useAppSelector(checkoutSelector);

  function toggleShippingDetails(status: boolean): void {
    dispatch(setShippingCheckbox(status));
  }

  function updateBilling(key: keyof BillingState, value: string): void {
    dispatch(updateBillingDetails(key, value));
  }

  function updateShipping(
    key: keyof ShippingState | null,
    value: string | ShippingState,
  ): void {
    dispatch(updateShippingDetails(key, value));
  }

  function validateInput(
    key: keyof BillingState | keyof ShippingState,
    value: string,
  ): string | undefined {
    let fail: string = '';
    switch (key) {
      case 'address':
        fail = validate.address(value);
        break;
      case 'email':
        fail = validate.email(value);
        break;
      case 'firstname':
        fail = validate.firstname(value);
        break;
      case 'lastname':
        fail = validate.lastname(value);
        break;
      case 'postcode':
        fail = validate.postalCode(parseInt(value));
        break;
      case 'state':
        fail = validate.state(value);
        break;
      default:
        fail = validate.content(key, 3);
        break;
    }

    if (!fail) {
      return;
    }

    return fail;
  }

  function validateInfo(info: BillingState | ShippingState): void {
    let fail: string = '';
    Object.entries(info).forEach(([key, value]) => {
      const result: string | undefined = validateInput(
        key as keyof BillingState | keyof ShippingState,
        value as string,
      );
      if (result) {
        fail = fail ? fail.concat('\n', result) : result;
      }
    });

    if (!fail) {
      validate.validate();
    }

    validate.setError(fail);
  }

  return {
    ...ctx,
    error: validate.error,
    isValid: validate.isValidated,
    toggleShipping: toggleShippingDetails,
    updateBilling,
    updateShipping,
    validateInput,
    validateInfo,
  };
}

export { useCheckout };

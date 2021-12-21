import React from 'react';
import promoCodes from './promo-codes.json';

import {
  PromoCodeAction,
  PromoCodeButton,
  PromoCodeMainContainer,
} from './styles/PromoCodeStyles';
import { CheckoutInputBox } from 'modules/checkout/components/styles/CheckoutStyles';

import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';

type Props = {
  hasPromo: (code: boolean) => void;
};

const PromoCode: React.FunctionComponent<Props> = ({
  hasPromo,
}): JSX.Element => {
  //* -------------------------------------------------
  // PromoCode

  const [promoCode, setPromoCode] = React.useState<string>('');
  const [isValid, setIsValid] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    if (isValid === false) {
      const reset = setTimeout(() => {
        setIsValid(undefined);
      }, 3000);

      return () => {
        clearTimeout(reset);
      };
    }
  }, [isValid]);

  function handleUserInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setPromoCode(e.target.value);
  }

  function handlePromoCode(): void {
    let test: boolean = false;
    promoCodes.forEach((code) => {
      if (code === promoCode) {
        test = true;
      }
    });

    if (test) {
      setIsValid(true);
      hasPromo(true);
    } else {
      setIsValid(false);
      hasPromo(false);
    }
    // TODO: apply discount to order
  }

  //* -------------------------------------------------
  // Render

  return (
    <PromoCodeMainContainer maxWidth={false}>
      <Typography variant="h3">{'Promo Code:'}</Typography>
      <PromoCodeAction>
        <CheckoutInputBox variant="outlined" sx={{ flex: 1 }}>
          <OutlinedInput
            id={`promo-code-input`}
            type="text"
            size="small"
            value={promoCode}
            placeholder={'Enter promotional code here'}
            onChange={handleUserInput}
          />
        </CheckoutInputBox>
        <PromoCodeButton onClick={handlePromoCode}>{'Add'}</PromoCodeButton>
      </PromoCodeAction>
      {isValid === true ? (
        <Typography component="p" sx={{ color: 'green' }}>
          {'Promotion Applied'}
        </Typography>
      ) : isValid === false ? (
        <Typography component="p" sx={{ color: 'red' }}>
          {'Invalid promo code'}
        </Typography>
      ) : (
        ''
      )}
    </PromoCodeMainContainer>
  );
};

export default PromoCode;
// 9876AA
// A9B7C6

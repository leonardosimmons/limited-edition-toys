import React from 'react';

import { useCheckCartSession } from 'modules/cart/hooks/useCheckCartSession';

import {
  BillingDetailsSection,
  BillingMainContainer,
  BillingSummarySection,
} from 'src/containers/pages/styles/BillingPage';

import Layout from 'src/containers/Layout/Layout';
import BillingDetails from 'modules/checkout/components/billing/BillingDetails';
import CheckoutSummary from 'modules/checkout/components/summary/CheckoutSummary';

function BillingPage(): JSX.Element {
  useCheckCartSession();

  return (
    <Layout title={'Limited Edition Toys | Checkout - Billing'}>
      <BillingMainContainer maxWidth={false}>
        <BillingDetailsSection disableGutters>
          <BillingDetails />
        </BillingDetailsSection>
        <BillingSummarySection disableGutters>
          <CheckoutSummary />
        </BillingSummarySection>
      </BillingMainContainer>
    </Layout>
  );
}

export default BillingPage;

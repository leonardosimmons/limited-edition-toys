import React from 'react';
import {
  BillingDetailsSection,
  BillingMainContainer,
  BillingSummarySection,
} from 'src/containers/pages/styles/BillingPage';

import Layout from 'src/containers/Layout/Layout';
import BillingDetails from 'models/checkout/components/billing/BillingDetails';
import ShippingDetails from 'models/checkout/components/shipping/ShippingDetails';
import CheckoutSummary from 'models/checkout/components/summary/CheckoutSummary';

function BillingPage(): JSX.Element {
  return (
    <Layout title={'Limited Edition Toys | Checkout - Billing'}>
      <BillingMainContainer maxWidth={false}>
        <BillingDetailsSection disableGutters>
          <BillingDetails />
          <ShippingDetails />
        </BillingDetailsSection>
        <BillingSummarySection disableGutters>
          <CheckoutSummary />
        </BillingSummarySection>
      </BillingMainContainer>
    </Layout>
  );
}

export default BillingPage;

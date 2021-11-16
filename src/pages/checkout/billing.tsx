import React from 'react';
import {
  BillingDetailsSection,
  BillingMainContainer,
} from 'src/containers/pages/styles/BillingPage';

import Layout from 'src/containers/Layout/Layout';
import BillingDetails from 'models/checkout/components/billing/BillingDetails';
import ShippingDetails from 'models/checkout/components/shipping/ShippingDetails';

function BillingPage(): JSX.Element {
  return (
    <Layout title={'Limited Edition Toys | Checkout - Billing'}>
      <BillingMainContainer maxWidth={false}>
        <BillingDetailsSection disableGutters>
          <BillingDetails />
          <ShippingDetails />
        </BillingDetailsSection>
      </BillingMainContainer>
    </Layout>
  );
}

export default BillingPage;

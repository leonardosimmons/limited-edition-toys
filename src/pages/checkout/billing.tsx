import React from 'react';
import {
  BillingDetailsSection,
  BillingMainContainer,
} from 'src/containers/pages/styles/BillingPage';

import Layout from 'src/containers/Layout/Layout';
import BillingDetails from 'models/checkout/components/billing/BillingDetails';

function BillingPage(): JSX.Element {
  return (
    <Layout title={'Limited Edition Toys | Checkout - Billing'}>
      <BillingMainContainer maxWidth={false}>
        <BillingDetailsSection disableGutters>
          <BillingDetails />
        </BillingDetailsSection>
      </BillingMainContainer>
    </Layout>
  );
}

export default BillingPage;

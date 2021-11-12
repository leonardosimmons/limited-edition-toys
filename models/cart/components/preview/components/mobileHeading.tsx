import React from 'react';
import data from 'data/pages/cart.json';

import {
  PreviewCheckoutButton,
  PreviewHeading,
  PreviewTitle,
} from '../styles/PreviewSection';

type Props = {};

const PreviewMobileHeading: React.FunctionComponent<Props> =
  (): JSX.Element => {
    return (
      <React.Fragment>
        <PreviewHeading>
          <PreviewCheckoutButton>{data.buttons.checkout}</PreviewCheckoutButton>
          <a>{data.preview.links.continue}</a>
        </PreviewHeading>
        <PreviewTitle>{data.preview.title}</PreviewTitle>
      </React.Fragment>
    );
  };

export default PreviewMobileHeading;

import React from 'react';
import data from 'data/pages/cart.json';

import {
  PreviewCheckoutButton,
  PreviewHeading,
  PreviewTitle,
} from '../styles/PreviewSection';

type Props = {};

const PreviewDesktopHeading: React.FunctionComponent<Props> =
  (): JSX.Element => {
    return (
      <PreviewHeading>
        <PreviewTitle>{data.preview.title}</PreviewTitle>
        <a>{data.preview.links.continue}</a>
      </PreviewHeading>
    );
  };

export default PreviewDesktopHeading;

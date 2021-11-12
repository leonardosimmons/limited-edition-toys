import React from 'react';
import { useAppSelector } from 'src/redux';

import data from 'data/pages/cart.json';
import { uiSelector } from 'src/redux/models/ui';

import {
  PreviewCheckoutButton,
  PreviewMainContainer,
  PreviewProductGrid,
  PreviewHeading,
} from './styles/PreviewSection';

import PreviewMobileHeading from './components/mobileHeading';
import PreviewDesktopHeading from './components/desktopHeading';

type Props = {};

const ShoppingCartPreview: React.FunctionComponent<Props> = (): JSX.Element => {
  const ui = useAppSelector(uiSelector);

  return (
    <PreviewMainContainer disableGutters maxWidth={false}>
      {ui.status.viewport === 'mobile' ? (
        <PreviewMobileHeading />
      ) : (
        <PreviewDesktopHeading />
      )}

      <PreviewProductGrid />
      {ui.status.viewport !== 'mobile' && (
        <PreviewCheckoutButton>{data.buttons.checkout}</PreviewCheckoutButton>
      )}
    </PreviewMainContainer>
  );
};

export default ShoppingCartPreview;

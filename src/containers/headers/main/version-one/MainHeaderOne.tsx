import React from 'react';

import headerData from 'data/headers.json';

import { MainHeaderWrapper } from '../styles/MainHeaderWrapper';
import {
  MainHeaderOneAction,
  MainHeaderOneHeading,
  MainHeaderOneSubtitle,
  MainHeaderOneTitle,
} from './styles/MainHeaderOneHeading';

import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

type Props = {};

const MainHeaderOne: React.FunctionComponent<Props> = (): JSX.Element => {
  const router = useRouter();

  //* -------------------------------------------------
  // Handlers

  function handleButtonClicked(): void {
    router.push('/products/anime');
  }

  //* -------------------------------------------------
  // Render

  return (
    <MainHeaderWrapper maxWidth={false}>
      <MainHeaderOneHeading>
        <MainHeaderOneTitle variant="h1">
          {headerData.main.one.title}
        </MainHeaderOneTitle>
        <MainHeaderOneSubtitle variant="subtitle1">
          {headerData.main.one.subtitle}
        </MainHeaderOneSubtitle>
        <MainHeaderOneAction disableGutters>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleButtonClicked}>
            {headerData.main.one.action.buttonText}
          </Button>
        </MainHeaderOneAction>
      </MainHeaderOneHeading>
    </MainHeaderWrapper>
  );
};

export default MainHeaderOne;

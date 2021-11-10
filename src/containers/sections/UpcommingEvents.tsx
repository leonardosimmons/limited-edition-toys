import React from 'react';
import { SectionDivider, SectionTitle, SectionWrapper } from './styles/Section';

import Container from '@mui/material/Container';
import { useAppSelector } from 'src/redux';
import { uiSelector } from 'src/redux/models/ui';

type Props = {
  title: string;
};

const UpcommingEvents: React.FunctionComponent<Props> = ({
  title,
}): JSX.Element => {
  const ui = useAppSelector(uiSelector);
  return (
    <SectionWrapper
      background
      maxWidth={false}
      sx={{
        minHeight: `${
          ui.status.viewport === 'mobile'
            ? '600px'
            : ui.status.viewport === 'tablet'
            ? '1500px'
            : '1100px'
        }`,
        justifyContent: 'center',
      }}>
      <SectionTitle variant="h2" sx={{ minHeight: 0 }}>
        {title}
      </SectionTitle>
      <SectionDivider variant="middle" />
      <Container sx={{ width: '100%', height: '90%' }}>{''}</Container>
    </SectionWrapper>
  );
};

export default UpcommingEvents;

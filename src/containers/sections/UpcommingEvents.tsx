import React from 'react';
import { SectionDivider, SectionTitle, SectionWrapper } from './styles/Section';

type Props = {
  title: string;
};

const UpcommingEvents: React.FunctionComponent<Props> = ({
  title,
}): JSX.Element => {
  return (
    <SectionWrapper background maxWidth={false} sx={{ minHeight: '1100px' }}>
      <SectionTitle variant="h2">{title}</SectionTitle>
      <SectionDivider variant="middle" />
    </SectionWrapper>
  );
};

export default UpcommingEvents;

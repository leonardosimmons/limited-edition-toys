import React from 'react';
import { useAppSelector } from 'src/redux';
import { Images } from 'utils/keys';
import { uiSelector } from 'src/redux/models/ui';

import {
  SectionDivider,
  SectionEventBox,
  SectionTitle,
  SectionWrapper,
} from './styles/Section';

import Image from 'next/image';

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
      <SectionTitle>{title}</SectionTitle>
      <SectionDivider variant="middle" />
      <SectionEventBox>
        <Image
          src={Images.RANDY_EMBERLIN}
          alt={'Randy Emberlin'}
          layout={'fill'}
          objectFit={'contain'}
        />
      </SectionEventBox>
    </SectionWrapper>
  );
};

export default UpcommingEvents;

/* 
  <SectionHeader>
    <Image
      src={Images.EVENTS_BANNER}
      alt={'Upcomming Events'}
      layout={'fill'}
      objectFit={'contain'}
    />
  </SectionHeader>
*/

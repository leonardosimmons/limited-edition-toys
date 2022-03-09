import React from 'react';
import data from 'data/pages/home.json';
import { useAppSelector } from 'src/redux';
import { Images } from 'utils/keys';
import { uiSelector } from 'src/redux/models/ui';

import {
  SectionDivider,
  SectionEventBox,
  SectionEvent,
  SectionTitle,
  SectionWrapper,
  SectionEventCard,
} from './styles/Section';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
};

const UpcomingEvents: React.FunctionComponent<Props> = ({
  title,
}): JSX.Element => {
  const ui = useAppSelector(uiSelector);
  return (
    <React.Fragment>
      <SectionWrapper
        background
        maxWidth={false}
        sx={{
          justifyContent: 'center',
          height: '700px',
        }}>
        <SectionTitle sx={{ marginTop: '4rem' }}>{title}</SectionTitle>
        <SectionDivider variant="middle" />
        <SectionEventBox>
          <SectionEvent maxWidth={false} disableGutters>
            <Typography variant="h4">No Upcoming Events</Typography>
            {/* <Box>
              <Image
                src={Images.RANDY_EMBERLIN}
                alt={'Randy Emberlin'}
                layout={'fill'}
                objectFit={'contain'}
              />
            </Box>
            <SectionEventCard>
              <Typography variant="h3">{data.events.list[0].title}</Typography>
              <Box>
                <Typography variant="caption">
                  {data.events.list[0].date}
                </Typography>
                <Typography variant="caption">
                  {data.events.list[0].time}
                </Typography>
              </Box>
              <Typography variant="body2">
                {data.events.list[0].description.body1}
              </Typography>
              <Typography variant="body2">
                {data.events.list[0].description.body2}
              </Typography>
            </SectionEventCard> */}
          </SectionEvent>
        </SectionEventBox>
      </SectionWrapper>
      <div className={'spacer'} />
    </React.Fragment>
  );
};

export default UpcomingEvents;

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

import React from 'react';
import data from 'data/pages/home.json';

import { CarouselImage } from './styles/Carousel';
import { SectionDivider, SectionTitle, SectionWrapper } from './styles/Section';

import Image from 'next/image';
import Carousel from 'src/features/carousel/Carousel';

type Props = {
  images: string[];
  title: string;
};

const ImageCarousel: React.FunctionComponent<Props> = ({
  images,
  title,
}): JSX.Element => {
  return (
    <React.Fragment>
      <SectionTitle variant="h2">{title}</SectionTitle>
      <SectionDivider primary variant="middle" />
      <Carousel arrows dots>
        {data.carousel.images.map((image, index) => (
          <CarouselImage key={index}>
            <Image
              src={image}
              alt="store image"
              layout="fill"
              objectFit="contain"
            />
          </CarouselImage>
        ))}
      </Carousel>
    </React.Fragment>
  );
};

export default ImageCarousel;

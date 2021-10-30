import React from 'react';

import Container from '@material-ui/core/Container';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Color } from 'utils/keys';

type Star = 'empty' | 'half' | 'full';

type Props = {
  rating: number;
};

type GeneratorProps = {
  type: Star;
};

const Generator: React.FunctionComponent<GeneratorProps> = ({ type }) => {
  return (
    <React.Fragment>
      {type === 'full' ? (
        <StarIcon style={{ fill: Color.SECONDARY }} />
      ) : type === 'half' ? (
        <StarHalfIcon style={{ fill: Color.SECONDARY }} />
      ) : (
        <StarBorderIcon style={{ fill: Color.SECONDARY }} />
      )}
    </React.Fragment>
  );
};

const StarsGenerator: React.FunctionComponent<Props> = ({
  rating,
}): JSX.Element => {
  const [stars, setStars] = React.useState<Star[]>([]);

  React.useEffect(() => {
    setStars(handleRating(rating));
  }, [rating]);

  function handleRating(rating: number): Star[] {
    switch (rating) {
      case 1:
        return ['full', 'empty', 'empty', 'empty', 'empty'];
      case 2:
        return ['full', 'full', 'empty', 'empty', 'empty'];
      case 3:
        return ['full', 'full', 'full', 'empty', 'empty'];
      case 4:
        return ['full', 'full', 'full', 'full', 'empty'];
      case 5:
        return ['full', 'full', 'full', 'full', 'full'];
      default:
        return ['empty', 'empty', 'empty', 'empty', 'empty'];
    }
  }

  return (
    <React.Fragment>
      {stars.map((star: Star, index: number) => (
        <Generator key={index} type={star} />
      ))}
    </React.Fragment>
  );
};

export default StarsGenerator;

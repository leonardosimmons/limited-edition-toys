import React from 'react';

import { CartCard, CartCardMainGrid } from './styles/CartCard';
import { CartCardHeading, CartCardImageBox } from './styles/CartCardHeading';
import { CartCardInfo } from './styles/CartCardInfo';
import { CartCardAction } from './styles/CartCardAction';

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QuantitySelect from 'lib/components/select/QuantitySelect';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

type Props = {};

const ProductCartCard: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <CartCard>
      <CartCardMainGrid container>
        <Grid item>
          <CartCardHeading>
            <CartCardImageBox>
              <Image
                src="/images/mascot-1.png"
                alt="test"
                layout="fill"
                objectFit="contain"
              />
            </CartCardImageBox>
            <Typography variant="h2">{'Test Item Name'}</Typography>
          </CartCardHeading>
        </Grid>
        <Grid item>
          <CartCardInfo>
            <QuantitySelect />
            <div className="cartInfo-priceBox">
              <span>{'$3200.00'}</span>
            </div>
          </CartCardInfo>
        </Grid>
        <Grid item>
          <CartCardAction>
            <Button startIcon={<VisibilityOutlinedIcon />}>
              {'View Details'}
            </Button>
            <Button startIcon={<CancelOutlinedIcon />}>{'Remove'}</Button>
          </CartCardAction>
        </Grid>
      </CartCardMainGrid>
    </CartCard>
  );
};

export default ProductCartCard;

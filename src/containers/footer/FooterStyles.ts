import { makeStyles, Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import { Images } from 'utils/keys';

export const useFooterStyles = makeStyles(({ breakpoints }: Theme) =>
  createStyles({
    description: {},

    footer: {
      width: '100%',
      height: '175px',
      backgroundImage: `url(${Images.BOTTOM_CLOUDS_LIGHT})`,
      backgroundSize: 'contain',
      [breakpoints.up('desktopSm')]: {
        height: '400px',
      },
    },

    gridItem: {},

    information: {},

    informationText: {},

    mainContainer: {},

    logo: {},
  }),
);

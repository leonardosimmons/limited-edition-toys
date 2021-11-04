import React from 'react';
import { NextLinkComposed } from 'lib/components/NextLinkComposed';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

type Props = {
  activeIndex: null | number;
};

const CategoryListMenu: React.FunctionComponent<Props> = ({
  activeIndex,
}): JSX.Element => {
  return (
    <Box>
      <Typography variant="subtitle1">Categories:</Typography>
      <List
        disablePadding
        aria-label="category menu"
        // className={styles.listContainer}
      >
        <ListItem
          button
          to={'/'}
          component={NextLinkComposed}
          selected={(activeIndex as number) > 0}
          // className={styles.listItem}
        >
          <ListItemText
            disableTypography
            // className={styles.listItemText}
          >
            Placeholder Content
          </ListItemText>
        </ListItem>
        <ListItem
          button
          to={'/'}
          component={NextLinkComposed}
          selected={(activeIndex as number) > 0}
          // className={styles.listItem}
        >
          <ListItemText
            disableTypography
            // className={styles.listItemText}
          >
            Placeholder Content
          </ListItemText>
        </ListItem>
        <ListItem
          button
          to={'/'}
          component={NextLinkComposed}
          selected={(activeIndex as number) > 0}
          // className={styles.listItem}
        >
          <ListItemText
            disableTypography
            // className={styles.listItemText}
          >
            Placeholder Content
          </ListItemText>
        </ListItem>
        <ListItem
          button
          to={'/'}
          component={NextLinkComposed}
          selected={(activeIndex as number) > 0}
          // className={styles.listItem}
        >
          <ListItemText
            disableTypography
            // className={styles.listItemText}
          >
            Placeholder Content
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default CategoryListMenu;

import React from 'react';
import { NextLinkComposed } from 'lib/components/NextLinkComposed';

import { useCategorySearchStyles } from '../CategorySearchStyles';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

type Props = {
  activeIndex: null | number;
};

const CategoryListMenu: React.FunctionComponent<Props> = ({
  activeIndex,
}): JSX.Element => {
  const styles = useCategorySearchStyles();

  return (
    <Box>
      <Typography variant="subtitle1">Categories:</Typography>
      <List
        disablePadding
        aria-label="category menu"
        className={styles.listContainer}>
        <ListItem
          button
          to={'/'}
          component={NextLinkComposed}
          selected={(activeIndex as number) > 0}
          className={styles.listItem}>
          <ListItemText disableTypography className={styles.listItemText}>
            Placeholder Content
          </ListItemText>
        </ListItem>
        <ListItem
          button
          to={'/'}
          component={NextLinkComposed}
          selected={(activeIndex as number) > 0}
          className={styles.listItem}>
          <ListItemText disableTypography className={styles.listItemText}>
            Placeholder Content
          </ListItemText>
        </ListItem>
        <ListItem
          button
          to={'/'}
          component={NextLinkComposed}
          selected={(activeIndex as number) > 0}
          className={styles.listItem}>
          <ListItemText disableTypography className={styles.listItemText}>
            Placeholder Content
          </ListItemText>
        </ListItem>
        <ListItem
          button
          to={'/'}
          component={NextLinkComposed}
          selected={(activeIndex as number) > 0}
          className={styles.listItem}>
          <ListItemText disableTypography className={styles.listItemText}>
            Placeholder Content
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default CategoryListMenu;
